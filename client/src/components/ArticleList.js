/** 
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { List, Loader } from '@wurde/components';
import Article from './Article';

/**
 * Define component
 */

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setArticles([
        {
          title:
            'AWS announces DeepComposer, a machine-learning keyboard for developers',
          link:
            'https://techcrunch.com/2019/12/02/aws-announces-deepcomposer-a-machine-learning-keyboard-for-developers/',
          createdAt: new Date()
        },
        {
          title: 'Oil and gas slow to adopt artificial intelligence',
          link:
            'https://www.houstonchronicle.com/business/columnists/tomlinson/article/Oil-and-gas-slow-to-adopt-artificial-intelligence-14861229.php',
          createdAt: new Date()
        },
        {
          title: "This is how Facebook's AI looks for bad stuff",
          link:
            'https://www.technologyreview.com/f/614774/this-is-how-facebooks-ai-looks-for-bad-stuff/',
          createdAt: new Date()
        },
        {
          title:
            'Data Scientists: Machine Learning Skills are Key to Future Jobs',
          link:
            'https://insights.dice.com/2019/11/29/data-scientists-machine-learning-skills-key-future-jobs/',
          createdAt: new Date()
        }
      ]);
    }, 1200)
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
