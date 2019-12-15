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
    // const oldArticles = LocalStorage.getOldArticles();
    // const subscriptions = LocalStorage.getSubscriptions();
    // const newArticles = await RSSFeed.fetchAll();
    // setArticles(newArticles);
    // // LocalStorage.saveArticles(data);

    // const parser = new Parser();
    // const now = Date.now();

    // localArticles = Object.keys(localObj).map(key => {
    //   return { title: key, link: localObj[key] };
    // });

    // // Add default feeds.
    // // Fetch subscriptions.
    // // const subscriptions = 

    // for (let i = 0; i < subscriptions.length; i++) {
    //   const feedLink = subscriptions[i].link;

    //   // Check last update timestamp for this specific feed.
    //   const feedUpdatedAt =
    //     feedLink in feedUpdateInfo ? Number(feedUpdateInfo[feedLink]) : null;

    //   // If last update was over an hour ago then fetch articles.
    //   // This is feed specific.
    //   if (now - feedUpdatedAt > hour) {
    //     feedUpdateInfo[feedLink] = now;
    //     const feed = await parser.parseURL(CORS_PROXY + feedLink);
    //     let feedArticles = feed.items.map(item => {
    //       return {
    //         title: item.title ? item.title.trim() : null,
    //         link: item.link ? item.link.trim() : null
    //       };
    //     });
    //     console.log(feed.title.trim(), feedArticles.length);
    //     feedArticles = feedArticles.slice(0, 5); // TEMP

    //     // Merge new articles with old articles.
    //     const feedObj = feedArticles.reduce((obj, a) => {
    //       obj[a.title] = a.link;
    //       return obj;
    //     }, {});
    //     localObj = { ...localObj, ...feedObj };

    //     updateInfo['updated-at'] = now;
    //     updateInfo['feeds'] = feedUpdateInfo;
    //     localStorage.setItem('update-info', JSON.stringify(updateInfo));
    //   }
    // }
  }
}

/**
 * Define helper
 */

export default RSSFeed;
