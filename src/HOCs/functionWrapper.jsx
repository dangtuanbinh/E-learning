import React, { Component } from 'react'
import Header from '../Components/Header/index'

const wrapper = (Component) => {
    return(props) => {
        return (
            <>
            <Header />
            <Component {...props} />
            </>
        );
    }
}   

export default wrapper;
