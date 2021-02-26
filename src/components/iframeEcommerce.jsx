import React, { Component } from 'react';
import './style.css';
import $ from 'jquery';
import './loader.js'


export default class IframeEcommerce extends Component{
    constructor(){
        super()

        this.sendCrossingBrowser = this.sendCrossingBrowser.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            userName:'',
            email:'',
            password:'',
            confirmPassword:'',

            error:''
        }
    }

    componentDidMount(){
  
    $("form[name='USER_DATA']").submit(function(e) {
    // Prevent the form from submitting via its default manner.
    e.preventDefault();
    e.stopPropagation();

    // Send the user's age and height to the parent window--sending the
    // data as an object that the parent can receive and parse.
    console.log("Enviando dados para>>> https://SiteParceiro.com.");
    let name = {}
    window.parent.postMessage(
        {
            
                userName: $("input[name='userName']").val(),
                email: $("input[name='email']").val(),
                password: $("input[name='password']").val(),

            
        },
        "http://localhost:3001");
    });

    }



    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendCrossingBrowser(){

        
    }
    
    
    render(){
        const {userName, email, password, confirmPassword} = this.state
        return(
            <div>

                <form className='form' name='USER_DATA'>
                <h1>Cadastro</h1>
                <label>Nome: </label>
                <input name='userName' htmlFor='userName' value={userName} onChange={this.handleChange}></input>

                <label>Email: </label>
                <input name='email' htmlFor='email' value={email} onChange={this.handleChange}></input>

                <label>Senha: </label>
                <input name='password' type='password' htmlFor='password' value={password} onChange={this.handleChange}></input>

                <label>Confirme sua senha: </label>
                <input name='confirmPassword' type='password' htmlFor='confirmPassword'value={confirmPassword} onChange={this.handleChange}></input>

                <button type='submit' onClick={this.sendCrossingBrowser}>Enviar!</button>

                </form>

                <div>
                    <h1 style={{textAlign:"center", margin:"0rem"}}> Eu sou o Ecommerce</h1>
                </div>
            </div>
        )
    }
}


