import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footaction extends Component {

    funScroll = () =>{
        window.scrollTo(0,0);
    }


    render() {
        return (
            <div className="container">
                <div className="py-3 my-5 text-center">
                        <Link className="btn btn-light rounded-pill text-dark mr-3" to="/">
                            <i className="fa fa-home greentxt"></i> Home
                        </Link>
                        <button className="btn btn-light rounded-pill text-dark" onClick={this.funScroll}>
                            <i className="fa fa-arrow-circle-up greentxt"></i> Top
                        </button>
                </div>
            </div>
        )
    }
}
