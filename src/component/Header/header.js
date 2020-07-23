import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UnSplashService from '../../utils/service';
import '../Header/header.css';

function Header() {
    const [randomImage, setRandomImage] = React.useState('');

    useEffect(() => {
        getRandomImage()
    }, [])

    const getRandomImage = async () => {
        let response = await UnSplashService.getRandomImage();
        setRandomImage(response.urls.regular)
        console.log(response.urls)
    }

    return (
        <Container fluid>
            <img id="randomImageStyle" src={randomImage} />
        </Container>
    )
}

export default Header;