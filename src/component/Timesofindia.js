import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getTimesofindia} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Timesofindia extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getTimesofindia();
    }

    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/timesofindia.png')} brandname={'Times Of India'} />
                </div>
                {this.props.timesofindia.length === 0 ? (<Loading/>) : null}
                {
                    this.props.timesofindia.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    timesofindia:state.news.timesofindia,
})

export default connect(mapStateToProps,{getTimesofindia})(Timesofindia);