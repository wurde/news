/**
 * Dependencies
 */

import Parser from 'rss-parser';
import LocalStorage from './LocalStorage';

/**
 * Constants
 */

// Some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const HOUR = 1000 * 60 * 60;

/**
 * Define helper
 */

class RSSFeed {
  static async fetchAll(feeds) {
    const parser = new Parser();
    const now = Date.now();
    const subscriptions = feeds.filter(feed => feed.subscribed);
    let allArticles = [];

    for (let i = 0; i < subscriptions.length; i++) {
      const link = subscriptions[i].link;
      const updatedAt = Number(subscriptions[i]['updated-at']);

      // If last update was over an hour ago then fetch articles.
      if (now - updatedAt > HOUR) {
        const feed = await parser.parseURL(CORS_PROXY + link);
        const articles = feed.items.map(item => {
          return {
            title: item.title ? item.title.trim() : null,
            link: item.link ? item.link.trim() : null
          };
        });
        allArticles = allArticles.concat(articles);
      }
    }

    return allArticles;
  }
}

/**
 * Define helper
 */

export default RSSFeed;
