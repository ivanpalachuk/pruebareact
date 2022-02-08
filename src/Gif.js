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
        this.apiCall("https://api.giphy.com/v1/gifs/search?api_key=6dFuI7hloGKO1I5B1WMGu5sQgBWfEyfO&q=Cats&rating=g&lang=en", this.mostrarGif)

    }

    mostrarGif = (data) => {
        console.log(data)
        this.setState(
            {
                gif: data.data[0].embed_url
            }
        )
    }

    componentDidUpdate() {

    }

    render() {
        let contenido;

        if (this.state.gif == "") {
            contenido = <p>Paraaaa manija, ya va a cargar </p>
        } else {
            contenido = <img src={this.state.gif}></img>
        }
        return (
            <div>
                {contenido}
                <button>Hace Click para ver mas gatitos</button>
            </div>
        )
    }
}

export default Gif;