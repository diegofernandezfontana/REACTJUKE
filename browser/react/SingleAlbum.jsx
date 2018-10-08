import React from 'react';
import ReactDOM from 'react-dom';

class SingleAlbum extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
    <div className="album col-xs-10">
        <div>
            <h3>{this.props.selectedAlbum.name}</h3>
            <img src={this.props.selectedAlbum.imageUrl} className="img-thumbnail" />
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>{this.props.selectedAlbum.name}</th>
                    <th>Arist</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
            { this.props.selectedAlbum.songs.map((song)=>{
                return <tr key={song.name} className={ song.id == this.props.currentSong.id ? 'active' : '' } >
                 <td>
                    <button className={ song.id == this.props.currentSong.id ? 'visibility: hidden' : "btn btn-default btn-xs " } onClick={() =>
                        {
                            this.props.start(song)
                        }
                    }>
                     <span className="glyphicon glyphicon-play"></span>
                     </button>
                 </td>
                 <td>{song.name}</td>
                 <td>{song.artists[0].name}</td>
                 <td>{song.genre}</td>
                 </tr>
            })
            }
            </tbody>



        </table>
        </div>
    )}
}

export default SingleAlbum
