import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
//useEffect é utilizado para fazer uma chamada à api assim que o componente for exibido em tela
import './Main.css'

import api from '../services/api';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function Main({match}){// o react router dom inclui uma propriedade chamada match, que possui todos os parâmetros passados para esta rota
  const [users, setUsers] = useState([]);

  //faz chamada à api
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

  //conecta com o websocket
  useEffect(() =>{
    const socket = io('http://localhost:3333');

    socket.on('oi', message => {
      console.log(message);
    })

    setTimeout(() => {
      socket.emit('oi', {
        message: 'Oi do Front!!'
      })
    }, 3000);

  }, [match.params.id]);




  async function handleLike(id){
    api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id},
    });
    setUsers(users.filter(user => user._id !== id));
  }
  async function handleDislike(id){
    api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id},
    });
    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <div className="main-container">
      <Link to="/"> 
        <img src={logo} alt="Tindev"/>    
      </Link>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
          <li key={user._id}>
          <img src={user.avatar} alt={user.avatar}/>
          <footer>
            <strong>{user.name}</strong>
            <p>{user.bio}</p>
          </footer>
          <div className="buttons">
            <button type="button" onClick={() => handleDislike(user._id)}>
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button" onClick={() => handleLike(user._id)}>
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
        ))}
        </ul>
        ) : (
          <div className="empty">Acabou :( </div>
        )
      }
    </div>
  )
}