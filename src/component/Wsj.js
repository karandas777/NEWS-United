import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getWsj} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Wsj extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getWsj();
    }

    render() {
        console.log(this.props.wsj)
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/wsj.png')} brandname={'WSJ'} />
                </div>
                {this.props.wsj.length === 0 ? (<Loading/>) : null}
                {
                    this.props.wsj.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    wsj:state.news.wsj,
})

export default connect(mapStateToProps,{getWsj})(Wsj);