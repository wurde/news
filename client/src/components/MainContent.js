/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { Row, Column } from '@wurde/components';
import { Button, Icon } from '@wurde/components';
import ArticleList from './ArticleList';
import FeedModal from './FeedModal';
import LocalStorage from '../helpers/LocalStorage';

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
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    setFeeds(LocalStorage.getFeeds());
  }, []);

  useEffect(() => {
    LocalStorage.setFeeds(feeds);
  }, [feeds]);

  function toggleFeedList() {
    setIsOpen(!isOpen);
  }

  return (
    <main>
      <Row>
        <Column>
          <hr />
          <Icon type="newspaper-o" onClick={toggleFeedList} style={IconStyle} />
          <FeedModal
            isOpen={isOpen}
            toggleModal={toggleFeedList}
            feeds={feeds}
            setFeeds={setFeeds}
          />
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
