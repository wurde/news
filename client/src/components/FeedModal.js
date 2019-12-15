/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { Row, Column } from '@wurde/components';
import { Modal, Divider, Heading, List, ListItem } from '@wurde/components';
import rssFeeds from '../data/rss-feeds.json';

/**
 * Define component
 */

function FeedModal({ isOpen, toggleModal }) {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('feeds'));

    if (!data) {
      data = rssFeeds.map(feed => { feed.subscribed = false; return feed; });
      localStorage.setItem('feeds', JSON.stringify(data));
    }

    setFeeds(data)
  }, [])

  return (
    <Row>
      <Column>
        <Modal isOpen={isOpen} toggleModal={toggleModal}>
          <Row>
            <Column spacing={2}>
              <Heading type="h6">Feeds</Heading>
            </Column>

            <Column>
              <Divider />
            </Column>

            <Column spacing={2}>
              <List>
                {feeds.map((feed, i) => {
                  return <ListItem key={i}>{feed.link}</ListItem>
                })}
              </List>
            </Column>
          </Row>
        </Modal>
      </Column>
    </Row>
  );
};

/**
 * Export component
 */

export default FeedModal;
