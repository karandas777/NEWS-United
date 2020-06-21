import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getCnbc} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Cnbc extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getCnbc();
    }

    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/cnbc.png')} brandname={'CNBC'} />
                </div>
                {this.props.cnbc.length === 0 ? (<Loading/>) : null}
                {
                    this.props.cnbc.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    cnbc:state.news.cnbc,
})

export default connect(mapStateToProps,{getCnbc})(Cnbc);