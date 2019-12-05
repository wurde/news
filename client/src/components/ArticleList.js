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

          const parser = new Parser();
          for (let i = 0; i < rssFeeds.length; i++) {
            const feedLink = rssFeeds[i].link;

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
              console.log('feed.title', feed.title);
              // const articles = feed.items.map(item => { return { title: item.title, link: item.link }});
            }
          }

          updateInfo['updated-at'] = now;
          updateInfo['feeds'] = feedUpdateInfo;
          localStorage.setItem('update-info', JSON.stringify(updateInfo));

          // TODO merge unique (new) articles with old articles.
        }

        // Set articles for display.
        setArticles(localArticles || []);

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
