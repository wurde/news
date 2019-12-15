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
    return JSON.parse(localStorage.getItem('articles')) || [];
  }

  static setArticles(data) {
    localStorage.setItem('articles', JSON.stringify(data));
  }

  static markRead(link) {
    const data =  JSON.parse(localStorage.getItem('articles')) || [];

    const articles = data.map(article => {
      if (article.link === link) {
        article['read-at'] = Date.now();
      }
      return article;
    });

    localStorage.setItem('articles', JSON.stringify(articles));
  }
}

/**
 * Export helper
 */

export default LocalStorage;
