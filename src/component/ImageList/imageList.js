import React, { useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import Pagination from 'react-bootstrap-4-pagination';
import CustomToastr from '../../utils/toastr';
import UnSplashService from '../../utils/service';

import "../ImageList/imageList.css";

const ImageList = ({ keyword }) => {

    const totalPage = React.useState(20)
    const itemPerPage = React.useState(9);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [searchInput, setSearchInput] = React.useState();

    useEffect(() => {
        // setSearchInput(keyword);
        debugger;
        if (keyword === "") {
            getDefaultImageList()
        } else {
            getImageListBySearchInput()
        }
    }, [keyword, pageNumber]);

    const getDefaultImageList = () => {
        console.log('getDefaultImageList')
    }

    const getImageListBySearchInput = () => {
        console.log('getImageListBySearchInput')
    }

    const handlePageChange = (page) => {
        setPageNumber(page)
        console.log('pageNumber', page)
    }
    
    let mdSize = {
        totalPages: totalPage,
        currentPage: pageNumber,
        showMax: 8,
        threeDots: true,
        prevNext: true,
        onClick: function(page) {
            handlePageChange(page)
        }
      };

    return (
        <Container fluid>
            <h2>Image list componet</h2>

            <div>
                <Pagination {...mdSize} shadow circle />
            </div>
        </Container>
    )
}

export default ImageList;