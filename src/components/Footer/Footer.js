import React from 'react';

import './Footer.css';
import { Col, Grid, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';


const Footer = () => (
  <footer className="footer">
  <Grid>
    <Row>
      <Col>
        <p><FormattedMessage id="footer.main_text"/> </p>
        &copy; 2018
      </Col>
    </Row>
  </Grid>

  </footer>
);


export default Footer;
