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
              News <Small>v0.1.0</Small>
            </Heading>
          </Header>

          <main style={{ backgroundColor: '#fff' }}>
            <hr />
            <List
              id="articles"
              type="ordered"
              style={{
                listStyleType: 'none',
                padding: '0px 10px',
                margin: '0'
              }}
            >
              <ListItem className="article">
                <Link
                  href="#"
                  style={{ color: 'rgb(0,0,0)', fontWeight: '700' }}
                >
                  AWS announces DeepComposer, a machine-learning keyboard for
                  developers
                </Link>
                <hr />
              </ListItem>
              <ListItem className="article">
                <Link
                  href="#"
                  style={{ color: 'rgb(0,0,0)', fontWeight: '700' }}
                >
                  Oil and gas slow to adopt artificial intelligence
                </Link>
                <hr />
              </ListItem>
              <ListItem className="article">
                <Link
                  href="#"
                  style={{ color: 'rgb(0,0,0)', fontWeight: '700' }}
                >
                  This is how Facebook's AI looks for bad stuff
                </Link>
                <hr />
              </ListItem>
              <ListItem className="article">
                <Link
                  href="#"
                  style={{ color: 'rgb(0,0,0)', fontWeight: '700' }}
                >
                  Data Scientists: Machine Learning Skills are Key to Future
                  Jobs
                </Link>
                <hr />
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
