import React from 'react';
import PageNotFound from './NotFound/PageNotFound';
import HomePage from './HomePage/homePage';


const HomePageView = () => {
    return <HomePage />
}

const NotFoundView = () => {
    return <PageNotFound />
}

export { HomePageView, NotFoundView }