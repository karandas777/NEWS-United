import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getHeadlines} from '../action/NewsAction';
import NewsCard from './NewsCard';
import Navpad from './Navpad';
import Loading from './Loading';

class Home extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getHeadlines();
    }
    
    render() {
        return (
            <React.Fragment>
                <Navpad/>
                <div className="container pt-3">
                    <div className="h3 py-3 mb-4 heading text-center">India Headlines</div>
                    {this.props.headlines.length === 0 ? (<Loading/>) : null}
                    {
                        this.props.headlines.map((news)=>(
                            <NewsCard key={news.title} news={news} />
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>({
    headlines:state.news.headlines,
})

export default connect(mapStateToProps,{getHeadlines})(Home);