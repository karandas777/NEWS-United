import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid bg-light">
                <div className="container py-3 px-0">
                    <Link className="bg-light rounded-pill text-decoration-none py-2 mb-0 px-3 text-dark h5" to="/">
                        <i className="fa fa-podcast greentxt mr-2"></i>
                        News United
                    </Link>
                </div>
            </div>
        )
    }
}
