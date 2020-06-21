import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getAbcnews} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Abcnews extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getAbcnews();
    }

    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/abcnews.jpg')} brandname={'ABC News'} />
                </div>
                {this.props.abcnews.length === 0 ? (<Loading/>) : null}
                {
                    this.props.abcnews.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    abcnews:state.news.abcnews,
})

export default connect(mapStateToProps,{getAbcnews})(Abcnews);