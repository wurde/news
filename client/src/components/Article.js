/**
 * Dependencies
 */

import React from 'react';
import {
  ListItem,
  Link,
  Card,
} from '@wurde/components';

/**
 * Define component
 */

function Article(props) {
  return (
    <ListItem className="article">
      <Card className="card" shadow={4} style={{ padding: '5px', margin: '10px 0px' }}>
        <Link
          href={props.article.link}
          style={{ color: 'rgb(0,0,0)', fontWeight: '700' }}
        >
          {props.article.title}
        </Link>
      </Card>
    </ListItem>
  );
}

/**
 * Define component
 */

export default Article;
