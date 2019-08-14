# Semana OmniStack 8.0

## Back-end

### Pacotes instalados

* #### express

    `yarn add express`

    Microframework para node, será utilizado para lidar com rotas, requisições e respostas para o server.

* #### nodemon
  
    `yarn add nodemon -D`

    Somente em dev, utilizado para reiniciar o server automaticamente quando há modificações nos arquivos.

* #### mongoose
  
    `yarn add mongoose`

    Implementa ODM.

* #### axios
  
    `yarn add axios`

    Pacote utilizado para acessar APIs externas, neste caso, a do GitHub.

    > Ps. É possível também, dentro do node, fazer isto de diversas formas.

* #### cors
  
    `yarn add cors`

    Permite que a aplicação seja acessada por qualquer endereço, isto é necessário para permitir que o front-end em react acesse o back-end

* #### Socket.io Client
  
    `yarn add socket.io`

    Torna o server compativel com protocolo de web sockets
