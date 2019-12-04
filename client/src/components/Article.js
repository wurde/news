/**
 * Dependencies
 */

import React from 'react';
import { useSpring } from 'react-spring';
import {
  ListItem,
  Link,
  Card,
  Anim,
} from '@wurde/components';

/**
 * Define component
 */

function Article(props) {
  const fadeInProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
  });

  return (
    <ListItem className="article">
      <Anim style={fadeInProps}>
        <Card className="card" shadow={4} style={{ padding: '5px', margin: '10px 0px' }}>
          <Link
            href={props.article.link}
            style={{ color: 'rgb(0,0,0)', fontWeight: '700' }}
          >
            {props.article.title}
          </Link>
        </Card>
      </Anim>
    </ListItem>
  );
}

/**
 * Define component
 */

export default Article;
