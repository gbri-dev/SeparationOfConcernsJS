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

 Para saber se o código é uma ameba, sempre se pergunte:
 "De quem é esse código? "
    - se 100% das vezes você responder que aquela linha de codigo pertence ao 
    mesmo componente, então ele está totalmente aclopado.
    - se você não souber responder com clareza é por que vc não tem a compreenção
    da modelagem do seu código.

Temos 3 estágio de acoplamento:
1 estágio é quando vc possui codigo de vários componentes tudo misturado ao mesmo tempo
2 estágio é quando apensar de os componentes estarem isolados um código conhece o outro, ele chama outro componente de forma estática de forma explicita.
3 estágio é quando os componentes não se conhecem, nem de forma estática. E para conseguir isso, vamos usar o padrão de projeto observer.