import React, {useState} from 'react';
//useState é utilizado para utilizar estado
//estado de um componente: é toda informação que o componente vai manipular

import logo from '../assets/logo.svg'
import './Login.css'

export default function Login(){
  const [ username, setUsername ]= useState('');

  function handleSubmit(e){
    e.preventDefault(); //previne o comportamento padrão de redirecionamento de página quando um formulário pe submetido
    console.log(username)
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev"/>
        <input 
          placeholder="Digite seu usuário do Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
          />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

