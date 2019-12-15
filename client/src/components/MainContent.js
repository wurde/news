/**
 * Dependencies
 */

import React from 'react';
import { Button, Icon } from '@wurde/components';
import ArticleList from './ArticleList';

/**
 * Define component
 */

function MainContent() {
  return (
    <main>
      <hr />
      <Icon type="newspaper-o" fill="#348FF0" />

      <ArticleList />
    </main>
  );
}

/**
 * Define component
 */

export default MainContent;
