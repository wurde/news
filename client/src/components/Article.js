/**
 * Dependencies
 */

import React from 'react';
import {
  ListItem,
  Link,
} from '@wurde/components';

/**
 * Define component
 */

function Article(props) {
  return (
    <ListItem className="article">
      <Link
        href={props.article.link}
        style={{ color: 'rgb(0,0,0)', fontWeight: '700' }}
      >
        {props.article.title}
      </Link>
      <hr />
    </ListItem>
  );
}

/**
 * Define component
 */

export default Article;
