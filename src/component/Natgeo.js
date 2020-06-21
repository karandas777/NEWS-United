import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getNatgeo} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Natgeo extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getNatgeo();
    }

    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/natgeo.png')} brandname={'NAT GEO'} />
                </div>
                {this.props.natgeo.length === 0 ? (<Loading/>) : null}
                {
                    this.props.natgeo.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    natgeo:state.news.natgeo,
})

export default connect(mapStateToProps,{getNatgeo})(Natgeo);