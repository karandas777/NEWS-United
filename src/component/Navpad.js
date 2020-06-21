import React, { Component } from 'react';
import Navpaditems from './Navpaditems';


export default class Navpad extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            itemslist:[
                {
                    imgname:"timesofindia.png",
                    brandname:"Times Of India",
                    linkpath:"/timesofindia"
                },
                {
                    imgname:"gsmarena.png",
                    brandname:"GSMARENA",
                    linkpath:"/gsmarena"
                },
                {
                    imgname:"bbcnews.png",
                    brandname:"BBC News",
                    linkpath:"/bbcnews"
                },
                {
                    imgname:"abcnews.jpg",
                    brandname:"ABC News",
                    linkpath:"/abcnews"
                },
                {
                    imgname:"cnbc.png",
                    brandname:"CNBC",
                    linkpath:"/cnbc"
                },
                {
                    imgname:"businessinsider.png",
                    brandname:"Business Insider",
                    linkpath:"/businessinsider"
                },
                {
                    imgname:"cnn.png",
                    brandname:"CNN",
                    linkpath:"/cnn"
                },
                {
                    imgname:"googlenews.png",
                    brandname:"Google News",
                    linkpath:"/googlenews"
                },
                {
                    imgname:"natgeo.png",
                    brandname:"NAT GEO",
                    linkpath:"/natgeo"
                },
                {
                    imgname:"nfl.png",
                    brandname:"NFL",
                    linkpath:"/nfl"
                },
                {
                    imgname:"thehindu.png",
                    brandname:"The Hindu",
                    linkpath:"/thehindu"
                },
                {
                    imgname:"wsj.png",
                    brandname:"WSJ",
                    linkpath:"/wsj"
                },
            ]
        }
    }
    

    render() {
        const {itemslist} = this.state;
        return (
            <div className="py-3 my-3 container navpad rounded">
                <div className="h3 py-3 my-3 heading text-light text-center">All your favourite news in one place</div>
                <div className="row">
                    {
                        itemslist.map((item)=>(
                            <div className="col-3" key={item.brandname}>
                                <Navpaditems imgpath={require('../assets/'+item.imgname)} 
                                brandname={item.brandname} linkpath={item.linkpath} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
