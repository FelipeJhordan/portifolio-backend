# Api consumida pelo portifolio
## Tecnologias
- Nestjs
- googleapi
## Problema
A api desenvolvida anteriormente estava salvando em um arquivo, porém ocorre um "desligamento" da api em cada x horas em sites de hospedagem grátis ( heroku, netflify, etc), e também é reiniciada quando é feita uma solicitação, fazendo o deploy de todos os arquivos novamente, resultando assim em perca das mensagens, necessitando assim salvar as mensagens de outra forma.

## Objetivo
- Treinar integração com apis externas
- Servir o site de portifolio com uma api externa que salve as mensagens ( Olhar Problema )
- Treinar Clean Arch/Nest em aplicações pequenas
- Usar fastify 