import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const styles = {
    containerStyle: {
        backgroundColor: "black"
    },
    colStyle: {
        height: '20rem'
    },
    newsApiText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-block',
        marginTop: '7rem'
    },
    newsText: {
        letterSpacing: '4px',
        padding: '5px 0 5px 6px',
        boxSizing: 'border-box',
        fontFamily: 'NA Sans',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'white'
    },
    apiText: {
        letterSpacing: '4px',
        margin: '0, 3px 0 8px',
        padding: '5px 0 5px 6px',
        fontFamily: 'NA Sans',
        letterSpacing: '-1px',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#1a73e8'
    }
}

function Footer() {
    return (
        <Container fluid style={styles.containerStyle}>
            <Row>
                <Col style={styles.colStyle}>
                    <div style={styles.newsApiText}>
                        <span style={styles.newsText}>Search</span>
                        <span style={styles.apiText}>it</span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;