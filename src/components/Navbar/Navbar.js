import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button, Container, Col } from 'react-bootstrap';
import './Navbar.css'

function NavBar() {
  const [searchValue, setSearchValue] = useState(null)
  console.log('user search', searchValue);

  const captureValue = (e)=> {
    setSearchValue(e.target.value);
  }
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <img
          src="/dnd-logo.png"
          width="500"
          height="45"
          className="d-inline-block align-top"
          alt="DnD logo"
        />
        <Form className="d-flex">
          <Col sm={10}>
          <div className="search-input">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={(e) => captureValue(e)}
            />
          </div>
          </Col>
          <Button variant="outline-light">Search</Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default NavBar