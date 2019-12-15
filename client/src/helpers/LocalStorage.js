/**
 * Dependencies
 */

import defaultFeeds from '../data/rss-feeds.json';

/**
 * Define helper
 */

class LocalStorage {
  static getFeeds() {
    const data = JSON.parse(localStorage.getItem('feeds'));

    if (data) {
      return data;
    } else {
      localStorage.setItem('feeds', JSON.stringify(defaultFeeds));
      return defaultFeeds;
    }
  }

  static setFeeds(data) {
    localStorage.setItem('feeds', JSON.stringify(data));
  }

  static setFeedUpdatedAt(link) {
    const data = JSON.parse(localStorage.getItem('feeds'));

    const feeds = data.map(feed => {
      if (feed.link === link) {
        feed['updated-at'] = Date.now();
      }
      return feed;
    })

    localStorage.setItem('feeds', JSON.stringify(feeds));
  }

  static getArticles() {
    const data = JSON.parse(localStorage.getItem('articles')) || [];

    let localObj = data.reduce((obj, a) => {
      obj[a.title] = a.link;
      return obj;
    }, {});

    return data;
  }

  static setArticles(data) {
    localStorage.setItem('articles', JSON.stringify(data));
  }
}

/**
 * Export helper
 */

export default LocalStorage;
