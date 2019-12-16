/**
 * Dependencies
 */

import React from 'react';
import { useSpring } from 'react-spring';
import { ListItem, Link, Card, Anim } from '@wurde/components';
import LocalStorage from '../helpers/LocalStorage';

/**
 * Define styles
 */

const CardStyle = {
  padding: '5px',
  margin: '10px 0px',
  backgroundColor: 'none',
  border: 'none'
};

const LinkStyle = {
  color: 'rgb(0,0,0)',
  textDecoration: 'none'
};

/**
 * Define component
 */

function Article(props) {
  const fadeInProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: props.index * 25,
    config: { duration: 500 }
  });

  function markRead(e) {
    e.preventDefault();
    const link = props.article.link;
    LocalStorage.markRead(link);
    props.setArticles(props.articles.filter((x, i) => i !== props.index));
    window.open(link);
  }

  return (
    <ListItem className="article">
      <Anim className="anim-fadein" style={fadeInProps}>
        <Card className="card" shadow={0} style={CardStyle}>
          <Link
            href={props.article.link}
            style={LinkStyle}
            onClick={markRead}
            target="_blank"
            rel="nofollow"
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
