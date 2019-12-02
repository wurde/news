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
} from '@wurde/components';

/**
 * Define component
 */

function App() {
  return (
    <Container>
      <Row>
        <Column>
          <Header>
            <Heading type="h1" style={{ fontSize: '1.8rem' }}>
              News
            </Heading>
          </Header>

          <main style={{ backgroundColor: '#fff' }}>
            <List
              id="articles"
              type="ordered"
              style={{ listStyleType: 'none' }}
            >
              <ListItem className="article">
                <Link href="#">Article #1</Link>
              </ListItem>
              <ListItem className="article">
                <Link href="#">Article #2</Link>
              </ListItem>
            </List>
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
