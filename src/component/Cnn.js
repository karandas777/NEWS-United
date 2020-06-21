import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getCnn} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Cnn extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getCnn();
    }

    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/cnn.png')} brandname={'CNN'} />
                </div>
                {this.props.cnn.length === 0 ? (<Loading/>) : null}
                {
                    this.props.cnn.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    cnn:state.news.cnn,
})

export default connect(mapStateToProps,{getCnn})(Cnn);