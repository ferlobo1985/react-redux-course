import React,{ Component } from 'react';

import Header from './header';

class Artist extends Component {
    constructor(props){
        super(props)

        this.state = {
            artist:''
        }
    }

    componentDidMount() {
        const URL =  `http://localhost:3004/artists/${this.props.match.params.artistid}`
        fetch(URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({artist:json})
        })
    }

    showAlbumList (albums) {
        if(albums){
            return albums.map(function(item){
                return (
                    <img alt="" src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }
      
    }

    render(){
        return(
            <div>
            <Header></Header>
            <div className="artist_bio">
                    <div className="avatar">
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                    <div className="albums_list">
                        {this.showAlbumList(this.state.artist.albums)}
                    </div>
            </div>
            </div>
        )
    }
}

export default Artist;