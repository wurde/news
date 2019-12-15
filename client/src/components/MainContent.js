/**
 * Dependencies
 */

import React, { useState } from 'react';
import { Row, Column } from '@wurde/components';
import { Button, Icon } from '@wurde/components';
import ArticleList from './ArticleList';
import FeedModal from './FeedModal';

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
  const [isOpen, setIsOpen] = useState(false);

  function toggleFeedList() {
    setIsOpen(!isOpen);
  }

  return (
    <main>
      <Row>
        <Column>
          <hr />
          <Icon type="newspaper-o" onClick={toggleFeedList} style={IconStyle} />
          <FeedModal isOpen={isOpen} toggleModal={toggleFeedList} />
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
