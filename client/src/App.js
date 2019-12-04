/**
 * Dependencies
 */

import React from 'react';
import {
  Container,
  Row,
  Column,
  Header,
  Heading,
  List,
  ListItem,
  Link,
  Small,
} from '@wurde/components';
import ArticleList from './components/ArticleList';

/**
 * Define component
 */

function App() {
  return (
    <Container>
      <Row>
        <Column>
          <Header>
            <Heading type="h1" style={{ fontSize: '1rem', textAlign: 'right' }}>
              <Link href="https://github.com/wurde/news" style={{ color: 'rgb(0,0,0)' }}>
                News <Small>v0.1.0</Small>
              </Link>
            </Heading>
          </Header>

          <main style={{ backgroundColor: '#fff' }}>
            <hr />
            <ArticleList />
          </main>
        </Column>
      </Row>
    </Container>
  );
}

/**
 * Export component
 */

export default App;
