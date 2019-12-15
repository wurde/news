/** 
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { List, Loader } from '@wurde/components';
import Article from './Article';
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

function ArticleList({ feeds }) {
  const [articles, setArticles] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      const newArticles = await RSSFeed.fetchAll(feeds);
      setArticles(newArticles.slice(0, 25));
    }
    fetchArticles();
  }, [feeds, refresh]);

  if (articles.length === 0) return <Loader id="articles-loader" type="loader5" style={{ display: 'flex', justifyContent: 'center' }} />;

  return (
    <List id="articles" type="ordered" style={ListStyle}>
      {articles.map((article, i) => (
        <Article
          key={i}
          index={i}
          article={article}
          articles={articles}
          setArticles={setArticles}
          setRefresh={setRefresh}
          refresh={refresh}
        ></Article>
      ))}
    </List>
  );
}

/**
 * Define component
 */

export default ArticleList;
