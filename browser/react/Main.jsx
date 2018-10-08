import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'
import Esqueleto from './Esqueleto.jsx'
import SingleAlbum from './SingleAlbum.jsx'
import fakeAlbums from './Albums.jsx'
import axios from 'axios';

const audio = document.createElement('audio');

class Main extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            albums: [],
            selectedAlbum: {},
        };
        this.start = this.start.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
        this.resetAlbum = this.resetAlbum.bind(this);
        this.start = this.start.bind(this.selectedAlbum);
    }
    start (val) {
        //console.log(this.selectedAlbum);
        audio.src = val;
        audio.load();
        audio.play();
    }
    handlerClick(album){
        axios.get(`/api/albums/${album.id}`)
        .then(res => res.data)
        .then(album =>
            this.setState({ selectedAlbum: album })
        )

    }
    resetAlbum(){
        this.setState({selectedAlbum: {}});
    }
    componentDidMount(){
        axios.get('api/albums')
        .then(response => {
            return response.data
        })
        .then(data => {
            this.setState({albums:data})
        })
        .catch();
    }
    render(){
        //console.log(this.state.selectedAlbum);
        return <div>
                <Sidebar resetAlbum={this.resetAlbum}/>
                {(Object.keys(this.state.selectedAlbum) == '' ) ? ( <Esqueleto albums={this.state.albums} handlerClick={this.handlerClick}/>): <SingleAlbum selectedAlbum={this.state.selectedAlbum} start={this.start}/>}
                <Footer/>
            </div>
    }
}

export default Main;
