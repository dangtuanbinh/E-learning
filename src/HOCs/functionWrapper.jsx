import React, { Component } from 'react'
import PageHeader from '../Components/PageHeader/index'
import Footer from '../Components/Footer/index'

const wrapper = (Component) => {
    return(props) => {
        return (
            <>
            <PageHeader />
            <Component {...props} />
            <Footer />
            </>
        );
    }
}   

export default wrapper;
