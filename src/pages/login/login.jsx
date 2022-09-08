import React, { useState, useContext } from "react";
import './login.css';

import { AuthContext } from "../../context/auth";

import NavBar from '../../components/navbar/navbar'
import Footer from "../../components/footer/footer"

const Login = () => {

    const {authenticated, login } = useContext (AuthContext);

    //login
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //cadastro
    const [emailc, setEmailc] = useState("")
    const [telc, setTelc] = useState("")
    const [cpf, setCpf] = useState("")
    const [passwordc, setPasswordc] = useState("")
    const [passwordcc, setPasswordcc] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", {email, password});
        login(email, password);
    }

    return (
        <div id="body">
            <NavBar></NavBar>
            <div className="forms">
                <div id="login">
                    <h1>Já é nosso cliente?</h1>
                    <h1>Faça seu login</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <input className="input" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Digite seu email" ></input>
                        <input className="input" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Digite sua senha" ></input>
                        <button className="button" type="submit" >Login</button>
                        <a className="recsenha">Esqueceu a senha?</a>
                    </form>
                </div>
                <div id="login">
                    <h1>Você é novo?</h1>
                    <h1>Realize já seu cadastro!</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <input className="input" type="email" value={emailc} onChange={(e)=> setEmailc(e.target.value)} placeholder="Digite seu email" ></input>
                        <input className="input" type="tel" value={telc} onChange={(e)=> setTelc(e.target.value)} placeholder="Digite seu telefone" ></input>
                        <input className="input"  value={cpf} onChange={(e)=> setCpf(e.target.value)} placeholder="Digite seu CPF" ></input>
                        <input className="input" type="password" value={passwordc} onChange={(e)=> setPasswordc(e.target.value)} placeholder="Digite sua senha" ></input>
                        <input className="input" type="password" value={passwordcc} onChange={(e)=> setPasswordcc(e.target.value)} placeholder="Repita sua senha" ></input>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;