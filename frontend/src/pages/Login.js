import React, {useState} from 'react';
//useState é utilizado para utilizar estado
//estado de um componente: é toda informação que o componente vai manipular

import api from '../services/api';
import logo from '../assets/logo.svg';
import './Login.css';

export default function Login({history}){//todos os componentes que declarados nas rotas possuem esta propriedade "history"
  const [ username, setUsername ]= useState('');

  async function handleSubmit(e){
    e.preventDefault(); //previne o comportamento padrão de redirecionamento de página quando um formulário pe submetido
    console.log(username);
    try{
      const response = await api.post('/devs', {
        //parametros do request:
        //username: username
        username, //como ambas as propriedades chamam-se username é possível enviar utilizando a short syntax do es6
      });
      const { _id } = response.data;
      console.log(response);
      history.push(`/dev/${_id}`);

    }catch(err){
      console.log(err.message);
    }
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

