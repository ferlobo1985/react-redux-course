import React from 'react';
import { Link } from  'react-router-dom'


const renderOtherNews = ({otherNews}) =>{
    if(otherNews){
        return otherNews.map((item)=>{
            return(
                <Link to={`/news/${item.id}`} key={item.id} className="item">
                    <div className="left" style={{background:`url(/images/articles/${item.img})`}}>
                    </div>
                    <div className="right">
                        <h3>{item.title}</h3>
                        <div className="category-tag">{item.category}</div>
                        <div className="tags">
                            <span><i className="fa fa-eye" aria-hidden="true"></i> {item.views}</span>
                            <span><i className="fa fa-thumbs-up" aria-hidden="true"></i> {item.likes[0]}</span>
                        </div>
                    </div>
                </Link>
            )
        })
    }
    
}

const OtherNews = (props) => {
    return (
        <div className="other-news">
            <h2>Other News</h2>
            <div className="other-news-items">
                {renderOtherNews(props)}
            </div>
        </div>
    );
};

export default OtherNews;