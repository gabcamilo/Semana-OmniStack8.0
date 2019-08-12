import React from 'react'

export default function Main({match}){// o react router dom inclui uma propriedade chamada match, que possui todos os parâmetros passados para esta rota
  return (
    <h1>{match.params.id}</h1>
  )
}