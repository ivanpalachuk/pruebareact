import React, { Component } from "react";

class Gif extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gif: ""
        }
    }

    apiCall(url, handler) {
        fetch(url)
            .then(response => response.json())
            .then(data => handler(data))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        
        this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=6dFuI7hloGKO1I5B1WMGu5sQgBWfEyfO&tag=cats&rating=g://api.giphy.com/v1/gifs/search?api_key=6dFuI7hloGKO1I5B1WMGu5sQgBWfEyfO&q=cats&limit=25&offset=0&rating=g&lang=en" , this.mostrarGif)
        alert("componente montado")
    }

    mostrarGif = (data) => {
        
        this.setState({
            gif: data.data.images.downsized.url
        })
    }

    componentDidUpdate() {
        //this.nuevoGif()

    }

    nuevoGif(){
        this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=6dFuI7hloGKO1I5B1WMGu5sQgBWfEyfO&tag=cats&rating=g://api.giphy.com/v1/gifs/search?api_key=6dFuI7hloGKO1I5B1WMGu5sQgBWfEyfO&q=cats&limit=25&offset=0&rating=g&lang=en", this.mostrarGif)

    }
    
    render() {
        let contenido;

        if (this.state.gif === "") {
            contenido = <p> Paraaaa manija, ya va a cargar </p>
        } else {
            contenido = <img src={this.state.gif} alt = "Giffatuno" ></img>
        }

        return (<div> {contenido} <button /*onClick={</div>() => this.nuevoGif()}*/> Hace Click para ver mas gatitos </button>

        </div>)
    }
}




export default Gif;