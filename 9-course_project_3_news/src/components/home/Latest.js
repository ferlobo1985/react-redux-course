import React from 'react'
import { Link } from 'react-router-dom'


const showLatest = ({latest}) => {
    if(latest){
        return latest.map((item)=>{
            return (
                <Link to={`/news/${item.id}`} key={item.id} className="item">
                    <div 
                        className="image_cover"
                        style={{background:`url(/images/articles/${item.img})`}}
                    >
                        <div className="description">
                            <span>{item.category}</span>
                            <div>{item.title}</div>
                        </div>
                        
                    </div>
                </Link>
            )
        })
    }
}


const LatestNews = (props) => {
    return (
        <div className="home-latest">
            {showLatest(props)}
        </div>
    );
};

export default LatestNews;