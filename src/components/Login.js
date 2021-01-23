import React, { Component } from 'react'
import '../css/Login.css'

class Login extends Component {
    state = {
        loginData: {
            user: "",
            pass: ""
        }
    }

    handleChange = e => {
        if (e) {
            const updateValue = this.state.loginData
            updateValue[e.target.id] = e.target.value
            this.setState({
                loginData: updateValue
            })
        }
    }

    btnEntrarclick = e => {
        const { user, pass } = this.state.loginData
        if (user && pass) {
            alert(`Usuário ${user} entrou!`)
        } else {
            alert('Informe usuário e senha!')
        }
    }

    render() {
        return (
            <header className="Login-header">
                <div className="container">
                    <h1>Login</h1>
                    <hr/>
                    <div>
                        <div className="row">
                            <span className="label"><label htmlFor="user">Usuário:</label></span>
                            <input id="user" value={this.state.loginData.user} onChange={this.handleChange}/>
                        </div>
                        <div className="row">
                            <span className="label"><label htmlFor="pass">Senha:</label></span>
                            <input id="pass" value={this.state.loginData.pass} onChange={this.handleChange}/>
                        </div>
                        <div className="row">
                            <span/>
                            <button onClick={this.btnEntrarclick}>Entrar</button>
                            <span/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Login