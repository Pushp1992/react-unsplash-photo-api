import React, { useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import UnSplashService from '../../utils/service';

import "../SearchComponent/search.css";

function SearchImage() {
    const [searchkeyword, setSearchkeyword] = React.useState('')

    const searchByKeyWord = event => {
        event.preventDefault();
        let keyword;

        if (event.currentTarget.id === "searchBox") {
            keyword = event.currentTarget.id;
        } else {
            keyword = event.currentTarget.id;
        }

        console.log('keyword', keyword)
    }

    return (
        <Container>
            <div id="parent">
                <Row>
                    <Col>
                        <span id="firstWord">Search</span>
                        <span id="secondWord">it</span>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <div><span id="heading1">Free Stock Photos for Everything</span></div>
                        <div><span id="heading2">We offer the best free stock photos all in one place</span></div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={2}>
                        Search By tags:
                    </Col>
                    <Col md="auto">
                        <Button id="dog" size="sm" variant="outline-success" onClick={searchByKeyWord}>Dog</Button>{' '}
                        <Button id="cat" size="sm" variant="outline-success" onClick={searchByKeyWord}>Cat</Button>{' '}
                        <Button id="space" size="sm" variant="outline-success" onClick={searchByKeyWord}>Space</Button>{' '}
                        <Button id="nature" size="sm" variant="outline-success" onClick={searchByKeyWord}>Nature</Button>{' '}
                        <Button id="business" size="sm" variant="outline-success" onClick={searchByKeyWord}>Business</Button>{' '}
                        <Button id="office" size="sm" variant="outline-success" onClick={searchByKeyWord}>office</Button>{' '}
                        <Button id="coffee" size="sm" variant="outline-success" onClick={searchByKeyWord}>Coffee</Button>{' '}
                        <Button id="world" size="sm" variant="outline-success" onClick={searchByKeyWord}>World</Button>{' '}
                    </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <InputGroup>
                            <FormControl id="searchBox" placeholder="enter your search keyword" value={searchkeyword} onChange={e => setSearchkeyword(e.target.value)} />
                            <InputGroup.Append>
                                <Button variant="outline-primary" onClick={searchByKeyWord}>Button</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default SearchImage;