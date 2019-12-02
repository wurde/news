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

          <main>
            <List id="articles" type="ordered" style={{ listStyleType: 'none' }}>
              <ListItem className="article">
                <a href="#">Article #1</a>
              </ListItem>
              <ListItem className="article">
                <a href="#">Article #2</a>
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
