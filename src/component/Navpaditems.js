import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navpaditems extends Component {
    render() {
        const {imgpath,brandname,linkpath} = this.props;
        return (
            <div className="py-3 my-3 text-center">
            <Link className="text-decoration-none text-dark" to={linkpath}>
                <div>
                    <img src={imgpath} alt={brandname} className="navpadlogo mb-4"/>
                </div>
                <div className="text-light npitext">
                    {brandname}
                </div>
            </Link>
            </div>
        )
    }
}
