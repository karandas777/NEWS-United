import React, { Component } from 'react'

export default class NewsCard extends Component {
    render() {
        const {title,content,urlToImage,url} = this.props.news;
        return (
            <div className="my-3 row bg-light rounded newscard">
                <div className="col-md-4 p-0 overflow-hidden">
                    {
                        urlToImage === null || urlToImage === "null" ? 
                        (<img src={require('../assets/newslogo2.jpg')} className="cimg" alt={title} />) :
                        (<img src={urlToImage} className="cimg" alt={title} />) 
                    }
                </div>
                <div className="col-md-8">
                    <div className="h3 mt-3 text-dark heading">{title}</div>
                    <div className="hrbar greenbg mt-3"></div>
                    <div className="my-3 text-secondary">{content} 
                        <a href={url} className="greentxt text-decoration-none ml-2">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
