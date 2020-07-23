import React, { Component } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';

// Custom component
import CustomToastr from '../../utils/toastr';
import Header from '../Header/header';
import SearchImage from '../SearchComponent/search';
import "./homePage.css";

function HomePage(){
   return(
       <Container fluid>
           <Header/>
           <SearchImage />
       </Container>
   )
}

export default HomePage;