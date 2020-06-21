import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getThehindu} from '../action/NewsAction';
import NewsCard from './NewsCard';
import LogoHolder from './LogoHolder';
import Loading from './Loading';

class Thehindu extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getThehindu();
    }

    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <LogoHolder imgpath={require('../assets/thehindu.png')} brandname={'The Hindu'} />
                </div>
                {this.props.thehindu.length === 0 ? (<Loading/>) : null}
                {
                    this.props.thehindu.map((news)=>(
                        <NewsCard key={news.title} news={news} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    thehindu:state.news.thehindu,
})

export default connect(mapStateToProps,{getThehindu})(Thehindu);