/**
 * Dependencies
 */

import React from 'react';
import { Header, Heading, Link, Small } from '@wurde/components';
import pckg from '../../package.json';

/**
 * Define component
 */

function InfoHeader() {
  return (
    <Header>
      <Heading type="h1" style={{ fontSize: '1rem', textAlign: 'right' }}>
        <Link
          href="https://github.com/wurde/news"
          style={{ color: 'rgb(0,0,0)' }}
        >
          News <Small id="version">v{pckg.version}</Small>
        </Link>
      </Heading>
    </Header>
  );
}

/**
 * Define component
 */

export default InfoHeader;
