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
        let localArticles = localStorage.getItem('articles');
        console.log('localArticles', localArticles);

        // Check last update timestamp.
        const updatedAt = Number(localStorage.getItem('updated-at'));
        const day = 1000 * 60 * 60 * 24;
        const now = Date.now();
        if ((updatedAt - now) > day) {
          localStorage.setItem('updated-at', now);
          console.log('fetching')
        }
        console.log('updatedAt', updatedAt);

        const parser = new Parser();
        // // If last update was over an hour ago then fetch articles.
        // for (let i = 0; i < rssFeeds.length; i++) {
        //   console.log(rssFeeds[i].link);
        // }
        const feed = await parser.parseURL(CORS_PROXY + rssFeeds[55].link);
        console.log(feed.title);

        // TODO merge unique (new) articles with old articles.

        const articles = feed.items.map(item => { return { title: item.title, link: item.link }});
        setArticles(articles)

        // Save updated articles to local storage.
        localStorage.setItem('articles', localArticles);
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
