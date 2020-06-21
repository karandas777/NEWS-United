import React, { Component } from 'react'

export default class LogoHolder extends Component {
    render() {
        const {imgpath,brandname} = this.props;
        return (
            <div className="h3 mt-2 text-center">
                <div>
                    <img src={imgpath} alt={brandname} className="logobanner mb-3"/>
                </div>
                <div className="text-secondary">
                    {brandname}
                </div>
            </div>
        )
    }
}
