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
            <hr />
            <List
              id="articles"
              type="ordered"
              style={{ listStyleType: 'none', padding: "0px 10px", margin: "0" }}
            >
              <ListItem className="article">
                <Link href="#">Article #1</Link>
                <hr/>
              </ListItem>
              <ListItem className="article">
                <Link href="#">Article #2</Link>
                <hr/>
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
