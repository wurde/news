/** 
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { List, Loader } from '@wurde/components';
import Article from './Article';
import LocalStorage from '../helpers/LocalStorage';
import RSSFeed from '../helpers/RSSFeed';

/**
 * Define styles
 */

const ListStyle = {
  backgroundColor: '#F2EEE0',
  listStyleType: 'none',
  padding: '10px',
  margin: '0'
};

/**
 * Define component
 */

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const feeds = LocalStorage.getFeeds();
        // const oldArticles = LocalStorage.getArticles();
        // const newArticles = await RSSFeed.fetchAll(feeds);
        setArticles([{title: 'blah', link: 'http://blah.com'}]);
      } catch (e) {
        console.error(e)
      }
    }
    fetchArticles();
  }, [])

  if (articles.length === 0) return <Loader id="articles-loader" type="loader5" style={{ display: 'flex', justifyContent: 'center' }} />;

  return (
    <List
      id="articles"
      type="ordered"
      style={ListStyle}
    >
      {articles.map((article, i) => <Article key={i} index={i} article={article}></Article>)}
    </List>
  );
}

/**
 * Define component
 */

export default ArticleList;
