import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Card, CardImg, CardImgOverlay, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Pagination from 'react-bootstrap-4-pagination';
import CustomToastr from '../../utils/toastr';
import UnSplashService from '../../utils/service';
import "../ImageList/imageList.css";

Container.propTypes = {
    fluid: PropTypes.bool
}
Row.propTypes = {
    noGutters: PropTypes.bool,
    form: PropTypes.bool
}


const ImageList = ({ keyword }) => {

    const [totalPage, setTotalPage] = React.useState(20)
    const [itemPerPage, setItemPerPage] = React.useState(9);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [searchInput, setSearchInput] = React.useState();
    const [imageResult, setImageResult] = React.useState([]);
    const [modal, setModal] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState('');
    const [downloadUrl, setDownloadUrl] = React.useState('')

    useEffect(() => {
        getImageList(pageNumber, itemPerPage, keyword)
    }, [keyword, pageNumber]);

    const getImageList = (pageNumber, itemPerPage, keyword) => {
        try {
            let response = UnSplashService.getImageList(pageNumber, itemPerPage, keyword);
            response.then(res => {
                if (res.length === 0) {
                    CustomToastr.error('Empty response returned');
                    return;
                }
                debugger;
                setImageResult(res);
            })
        } catch (err) {
            CustomToastr.error(err || 'something not right')
        }
    }

    const handlePageChange = (page) => {
        setPageNumber(page)
    }

    let mdSize = {
        totalPages: totalPage,
        currentPage: pageNumber,
        showMax: 8,
        threeDots: true,
        prevNext: true,
        onClick: function (page) {
            handlePageChange(page)
        }
    };

    const openImage = event => {
        toggle();
        let image = event.currentTarget.id;
        let downloadLink = event.currentTarget.name;
        setImageUrl(image);
        setDownloadUrl(downloadLink);
        console.log(image)
    }

    const toggle = () => setModal(!modal);

    return (
        <Container fluid>
            <br /><br /><br />
            <div>
                <Row>
                    {
                        imageResult.length !== 0 ?
                            imageResult.map(imageData => {
                                return (
                                    <Col id="colstyle" key={imageData.length} md={{ size: 3, offset: 1 }}>
                                        <Card>
                                            <CardImg id="cardImageStyle" top width="100%" src={imageData.urls.small} />
                                            <CardImgOverlay>
                                                <img id="userimage" src={imageData.user.profile_image.large} />
                                                <span id="firstspan">Image By </span>
                                                <span id="secondspan"> {imageData.user.instagram_username}</span>
                                                <br />
                                                <Button name={imageData.links.download_location} id={imageData.urls.regular} outline color="danger" onClick={openImage}>View</Button>
                                            </CardImgOverlay>
                                        </Card>
                                    </Col>
                                )
                            })
                            :
                            <Col>
                                <h3>No Image Result to Display</h3>
                            </Col>
                    }
                </Row>
            </div>

            <div id="paginationStyle">
                <Pagination {...mdSize} shadow circle />
            </div>

            <Modal id="modal" isOpen={modal} modalTransition={{ timeout: 400 }} backdropTransition={{ timeout: 900 }} toggle={toggle}>
                <img src={imageUrl} alt='image' />
                <div>
                    <Button color="success" onClick={toggle}>Download</Button>{' '}
                    <Button outline color="danger" onClick={toggle}>Cancel</Button>
                </div>
            </Modal>
        </Container>
    )
}

export default ImageList;