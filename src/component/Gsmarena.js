import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getGsmarena} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Gsmarena extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getGsmarena();
    }

    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/gsmarena.png')} brandname={'GSMARENA'} />
                </div>
                {this.props.gsmarena.length === 0 ? (<Loading/>) : null}
                {
                    this.props.gsmarena.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    gsmarena:state.news.gsmarena,
})

export default connect(mapStateToProps,{getGsmarena})(Gsmarena);