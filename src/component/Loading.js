import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="container text-center py-3">
                <img src={require('../assets/loader3.gif')} alt="loading" className="rounded-pill loaderimg" />
            </div>
        )
    }
}
