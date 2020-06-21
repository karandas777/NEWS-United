import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getNfl} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Nfl extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getNfl();
    }

    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/nfl.png')} brandname={'NFL'} />
                </div>
                {this.props.nfl.length === 0 ? (<Loading/>) : null}
                {
                    this.props.nfl.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    nfl:state.news.nfl,
})

export default connect(mapStateToProps,{getNfl})(Nfl);