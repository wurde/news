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
      <Button>
        <Icon type="newspaper-o" fill="blue" />
      </Button>

      <ArticleList />
    </main>
  );
}

/**
 * Define component
 */

export default MainContent;
