import React from 'react';


const showLatest = ({latest}) => {
    if(latest){
        return latest.map((item)=>{
            return (
                <div className="item">
                    <div 
                        className="image_cover"
                        style={{background:`url(/images/articles/1.jpg)`}}
                    >
                        <div className="description">
                            <span>{item.category}</span>
                            <div>{item.title}</div>
                        </div>
                        
                    </div>
                </div>
            )
        })
    }
}


const LatestNews = (props) => {
    return (
        <div className="home_latest">
            {showLatest(props)}
        </div>
    );
};

export default LatestNews;