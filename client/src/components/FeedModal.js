/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { Row, Column } from '@wurde/components';
import { Modal, Divider, Heading } from '@wurde/components';
import { Label, Input } from '@wurde/components';
import rssFeeds from '../data/rss-feeds.json';

/**
 * Define styles
 */

const InputStyle = {
  display: 'inline-block',
  width: 'inherit',
  marginRight: '10px',
};

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

    setFeeds(data);
  }, [])

  useEffect(() => {
    localStorage.setItem('feeds', JSON.stringify(feeds));
  }, [feeds])

  function toggleSubscription(e) {
    e.preventDefault();
    const data = feeds.map(feed => {
      if (feed.link === e.target.value) {
        feed.subscribed = !feed.subscribed
      }
      return feed;
    })

    setFeeds(data);
  }

  return (
    <Row>
      <Column>
        <Modal isOpen={isOpen} toggleModal={toggleModal}>
          <Row>
            <Column spacing={2}>
              <Heading type="h6">Feed Subscriptions</Heading>
            </Column>

            <Column>
              <Divider />
            </Column>

            <Column spacing={2}>
              {feeds.map((feed, i) => {
                return (
                  <div>
                    <Input
                      id={`feed-${i}`}
                      type="checkbox"
                      style={InputStyle}
                      checked={feed.subscribed}
                      value={feed.link}
                      onChange={toggleSubscription}
                    />
                    <Label key={i} htmlFor={`feed-${i}`}>
                      {feed.link}
                    </Label>
                  </div>
                );
              })}
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
