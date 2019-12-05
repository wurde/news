/** 
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { List, Loader } from '@wurde/components';
import Parser from 'rss-parser';
import Article from './Article';
import rssFeeds from '../data/rss-feeds.json';

/**
 * Constants
 */

// Some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const RSS_FEEDS = process.env.NODE_ENV !== 'production' ? rssFeeds.slice(0, 1) : rssFeeds;

/**
 * Define component
 */

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchFeed() {
      try {
        // Fetch old articles from local storage.
        let localArticles = JSON.parse(localStorage.getItem('articles')) || [];

        // Get last update timestamp.
        const updateInfo = JSON.parse(localStorage.getItem('update-info')) || {};
        const updatedAt = "updated-at" in updateInfo ? Number(updateInfo["updated-at"]) : null;
        const hour = 1000 * 60 * 60;
        const now = Date.now();

        // If last update was over an hour ago then fetch articles.
        if (now - updatedAt > hour) {
          const feedUpdateInfo = updateInfo["feeds"] || {};
          let localObj = localArticles.reduce(
            (a, obj) => (obj[a.title] = a.link),
            {}
          );

          const parser = new Parser();
          for (let i = 0; i < RSS_FEEDS.length; i++) {
            const feedLink = RSS_FEEDS[i].link;

            // Check last update timestamp for this specific feed.
            const feedUpdatedAt =
              feedLink in feedUpdateInfo
                ? Number(feedUpdateInfo[feedLink])
                : null;

            // If last update was over an hour ago then fetch articles.
            // This is feed specific.
            if (now - feedUpdatedAt > hour) {
              feedUpdateInfo[feedLink] = now;
              const feed = await parser.parseURL(CORS_PROXY + feedLink);
              let feedArticles = feed.items.map(item => { return {
                title: item.title ? item.title.trim() : null,
                link: item.link ? item.link.trim() : null,
              }})
              console.log(feed.title.trim(), feedArticles.length);
              feedArticles = feedArticles.slice(0, 5); // TEMP

              // Merge new articles with old articles.
              const feedObj = feedArticles.reduce((obj, a) => {
                obj[a.title] = a.link; return obj;
              }, {});
              localObj = { ...localObj, ...feedObj };

              updateInfo['updated-at'] = now;
              updateInfo['feeds'] = feedUpdateInfo;
              localStorage.setItem('update-info', JSON.stringify(updateInfo));
            }
          }

          localArticles = Object.keys(localObj).map(key => {
            return { title: key, link: localObj[key] };
          });
        }

        // Set articles for display.
        setArticles(localArticles);

        // Save updated articles to local storage.
        localStorage.setItem('articles', JSON.stringify(localArticles));
      } catch (e) {
        console.error(e)
      }
    }
    fetchFeed();
  }, [])

  if (articles.length === 0) return <Loader id="articles-loader" type="loader5" style={{ display: 'flex', justifyContent: 'center' }} />;

  return (
    <List
      id="articles"
      type="ordered"
      style={{
        listStyleType: 'none',
        padding: '0px 10px',
        margin: '0'
      }}
    >
      {articles.map((article, i) => <Article key={i} index={i} article={article}></Article>)}
    </List>
  );
}

/**
 * Define component
 */

export default ArticleList;
