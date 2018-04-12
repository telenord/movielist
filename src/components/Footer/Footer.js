import React from 'react';

import './Footer.css';
import { Col, Grid, Row } from 'react-bootstrap';

const Footer = () => (
  <footer className="footer">
  <Grid>
    <Row>
      <Col>
        <p> Make your Favourite MovieList</p>
        &copy; 2018
      </Col>
    </Row>
  </Grid>

  </footer>
);


export default Footer;
