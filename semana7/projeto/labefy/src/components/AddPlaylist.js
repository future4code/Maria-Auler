import React from "react";
import axios from "axios";
import { axiosConfig, baseUrl } from "../parameters";
import { ButtonDC, Input } from "../AppStyledComponents"

export default class AddPlayList extends React.Component {

    state = {
        infos: [],
        name: ""
    }

    handleName = (event) => {
        this.setState({ name: event.target.value })
    }

    createPlaylist = () => {
        const body = {
            name: this.state.name,
        };

        axios
            .post(baseUrl, body, axiosConfig)
            .then((res) => {
                alert("A playlist foi criado com sucesso!");
                this.setState({ name: "" });
            })
            .catch((err) => {
                alert("Deu ruim :(");
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <h2>Criar Playlist</h2>
                <Input
                    onChange={this.handleName}
                    value={this.state.name}
                    placeholder="Nome"
                />
                <ButtonDC onClick={this.createPlaylist}>Criar</ButtonDC>
            </div>
        )
    }

}