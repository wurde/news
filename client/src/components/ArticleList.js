/** 
 * Dependencies
 */

import React, { useState } from 'react';
import { List } from '@wurde/components';
import Article from './Article';

/**
 * Define component
 */

function ArticleList() {
  const [articles, setArticles] = useState([
    {
      title:
        'AWS announces DeepComposer, a machine-learning keyboard for developers',
      link: '',
      createdAt: new Date()
    },
    {
      title: 'Oil and gas slow to adopt artificial intelligence',
      link: '',
      createdAt: new Date()
    },
    {
      title: "This is how Facebook's AI looks for bad stuff",
      link: '',
      createdAt: new Date()
    },
    {
      title: 'Data Scientists: Machine Learning Skills are Key to Future Jobs',
      link: '',
      createdAt: new Date()
    }
  ]);

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
      {articles.map((article, i) => <Article key={i} article={article}></Article>)}
    </List>
  );
}

/**
 * Define component
 */

export default ArticleList;
