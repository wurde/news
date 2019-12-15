/**
 * Dependencies
 */

import React from 'react';
import { Row, Column } from '@wurde/components';
import { Button, Icon } from '@wurde/components';
import ArticleList from './ArticleList';

/**
 * Define styles
 */

const IconStyle = {
  float: 'right',
  cursor: 'pointer',
  marginRight: '10px', 
}

/**
 * Define component
 */

function MainContent() {
  function toggleFeedList() {
    alert('feed');
  }

  return (
    <main>
      <Row>
        <Column>
          <hr />
          <Icon type="newspaper-o" onClick={toggleFeedList} style={IconStyle} />
        </Column>
      </Row>

      <Row>
        <Column>
          <ArticleList />
        </Column>
      </Row>
    </main>
  );
}

/**
 * Define component
 */

export default MainContent;
