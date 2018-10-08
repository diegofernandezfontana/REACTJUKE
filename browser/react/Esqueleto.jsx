import React from 'react';
import ReactDOM from 'react-dom';


class Esqueleto extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        //console.log(this.props);
        return <div>
        <div className="col-xs-10">
            <div className="albums">
                <h3>Albums</h3>
                <div className="row">
                {
                    this.props.albums.map((album) =>{
                        return <div className="col-xs-4" key={album.name}>
                           <a className="thumbnail" href="#" onClick={() => this.props.handlerClick(album)}>
                           <img src={ album.imageUrl} />
                           <div className="caption">
                               <h5>
                               <span>{album.name}</span>
                               </h5>
                               <small>{album.songs.length}</small>
                           </div>
                           </a>
                        </div>
                    })
                }
                </div>
            </div>
        </div>
        </div>
    }
}

export default Esqueleto
