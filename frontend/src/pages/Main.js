import React, {useEffect, useState} from 'react'
//useEffect é utilizado para fazer uma chamada à api assim que o componente for exibido em tela
import './Main.css'

import api from '../services/api';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function Main({match}){// o react router dom inclui uma propriedade chamada match, que possui todos os parâmetros passados para esta rota
  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function loadUsers(){
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
      });
      setUsers(response.data);
    }
    loadUsers();

    /*
    syntax alternativa para a função ser executada assim que ela é definida:

    (async function loadUsers(){
    })();
     */

  }, [match.params.id]);

  return (
    <div className="main-container">
      <img src={logo} alt="Tindev"/>
      <ul>
        {users.map(user => (
          <li key={user._id}>
          <img src={user.avatar} alt={user.avatar}/>
          <footer>
            <strong>{user.name}</strong>
            <p>{user.bio}</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
        ))}
      </ul>
    </div>
  )
}