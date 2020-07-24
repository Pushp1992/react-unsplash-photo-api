import React, { Component } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';

// Custom component
import Header from '../Header/header';
import SearchImage from '../SearchComponent/search';
import Footer from '../Footer/footer';
import "../HomePage/homePage.css";

function HomePage() {
    return (
        <Container fluid style={{ backgroundColor: "whiteSmoke" }}>
            <div>
                <div id="parent"><Header /></div>
                <div id="child"><SearchImage /></div>
                <div id="footer"><Footer /></div>
            </div>
        </Container>
    )
}

export default HomePage;