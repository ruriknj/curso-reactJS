import React, { Component } from 'react';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: ''
        }
        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(event) {
        const {nome, email, senha} = this.state;

        if(nome != '' && email != '' && senha != '') {
            alert(`Nome: ${nome} \nE-mail:${email} \nSenha: ${senha} \n`);
        } else {
            this.setState({error: 'Ops! Parece que está faltando aago'});
        }

        event.preventDefault();

       
    }

    render() {
        return (
            <div>
                <h1>Novo usuário</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <lab>Nome:</lab>
                    <input type="text" value={this.state.nome} 
                    onChange={ (e) => this.setState({nome: e.target.value}) } 
                    /> <br />
                    <lab>E-mail:</lab>
                    <input type="email" value={this.state.email} 
                    onChange={ (e) => this.setState({email: e.target.value}) }
                    /> <br />
                    <lab>Senha:</lab>
                    <input type="password" value={this.state.senha} 
                    onChange={ (e) => this.setState({senha: e.target.value}) }
                    /> <br />
                    <button type="submit">Cadastrar</button>
                </form>

            </div>
        );
    }
}
export default App;