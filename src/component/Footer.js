import React, { Component } from 'react'
import Footaction from './Footaction'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <Footaction/>
                <div className="container-fluid greenbg">
                    <div className="container py-2">
                        <div className="h6 text-light text-center m-0">
                            <i className="fa fa-podcast mr-2"></i>
                            News United
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
