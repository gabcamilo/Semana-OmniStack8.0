import React from 'react'
import './Main.css'

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function Main({match}){// o react router dom inclui uma propriedade chamada match, que possui todos os parâmetros passados para esta rota
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev"/>
      <ul>
        <li>
          <img src="https://avatars0.githubusercontent.com/u/3604053?v=4" alt="Tindev"/>
          <footer>
            <strong>John Doe</strong>
            <p>lalsjaisja lajska ska sjajskajskaska ksak</p>
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

        <li>
          <img src="https://avatars0.githubusercontent.com/u/3604053?v=4" alt="Tindev"/>
          <footer>
            <strong>John Doe</strong>
            <p>lalsjaisja lajska ska sjajskajskaska ksak</p>
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

        <li>
          <img src="https://avatars0.githubusercontent.com/u/3604053?v=4" alt="Tindev"/>
          <footer>
            <strong>John Doe</strong>
            <p>lalsjaisja lajska ska sjajskajskaska ksak</p>
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

        <li>
          <img src="https://avatars0.githubusercontent.com/u/3604053?v=4" alt="Tindev"/>
          <footer>
            <strong>John Doe</strong>
            <p>lalsjaisja lajska ska sjajskajskaska ksak</p>
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
      </ul>
    </div>
  )
}