import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getGooglenews} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Googlenews extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getGooglenews();
    }

    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/googlenews.png')} brandname={'Google News'} />
                </div>
                {this.props.googlenews.length === 0 ? (<Loading/>) : null}
                {
                    this.props.googlenews.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    googlenews:state.news.googlenews,
})

export default connect(mapStateToProps,{getGooglenews})(Googlenews);