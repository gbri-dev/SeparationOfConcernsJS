# Separation of Concerns
 ***separação das preocupações** 

 ### Vamos ter 5 camadas para compor o sistema.
 * Apresentação
 * Jogo (lógica e dados)
 * Inputs 
 * Networking

 Identificando problemas no código:
 1. a camada de input não pode ser responsável por mudar o estado do jogo, ele apenas deve capturar ás ações do usuario.
 2. a camada de input não pode ter regras de negocio, por exemplo limitar o úsuario a apenas se mover dentro do quadro.
 3. a tela quebra se o usuario digitar uma tecla que não tenho no escopo do game.
 4. cada vez que precisar adicionar um novo comando precisaremos criar um novo if.