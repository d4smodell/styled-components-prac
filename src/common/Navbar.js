import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background-color: #222
    }

    .navbar-brand, .navbar-nav, nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }

`;

const Navigation = props => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href='/'>To Wonderland</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    
                <Nav.Item><Nav.Link className="text-light" href='/'>Story</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="text-light" href='/about'>Pages</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="text-light" href='/contacts'>Inspirations</Nav.Link></Nav.Item>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default Navigation