import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getBbcnews} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Bbcnews extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getBbcnews();
    }

    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/bbcnews.png')} brandname={'BBC News'} />
                </div>
                {this.props.bbcnews.length === 0 ? (<Loading/>) : null}
                {
                    this.props.bbcnews.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    bbcnews:state.news.bbcnews,
})

export default connect(mapStateToProps,{getBbcnews})(Bbcnews);