import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getBusinessinsider} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Businessinsider extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getBusinessinsider();
    }

    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/businessinsider.png')} brandname={'Business Insider'} />
                </div>
                {this.props.businessinsider.length === 0 ? (<Loading/>) : null}
                {
                    this.props.businessinsider.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    businessinsider:state.news.businessinsider,
})

export default connect(mapStateToProps,{getBusinessinsider})(Businessinsider);