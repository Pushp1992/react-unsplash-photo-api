import React, { useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import CustomToastr from '../../utils/toastr';
import UnSplashService from '../../utils/service';

import "../ImageList/imageList.css";

const ImageList = ({keyword}) => {

    const [searchInput, setSearchInput] = React.useState();

    useEffect(() => {
        setSearchInput(keyword);
        console.log('searchInput', searchInput)
    }, [keyword])

    return(
        <Container>
            <h2>Image list componet</h2>
        </Container>
    )
}

export default ImageList;