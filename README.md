# Estrutura

Este projeto está dividido em uma estrutura app(Backend), Mysql(Estrutura Banco de Dados) e web(Front end React). 

# Instruções para rodar o projeto:

1. Ter um ambiente com Docker, docker-compose instalado.
2. Acessar o diretório da aplicação e executar (docker-compose up -d) Para startup da estrutura do projeto.
3. Após start de todos os containers, acessar o endpoint (http://localhost:3000) Onde será apresentada as telas de import upload e listagem dos dados carregados

# Como consumir o endpoint

O projeto está configurado para expor um endpoint na porta 8090 para a máquina do usuário. Para isso é possível consumir os dados de listagem e upload conforme abaixo:

1. Listagem

```bash
curl --request GET \
  --url http://localhost:8090/transacoes
```

2. Upload

```bash
curl --request POST \
  --url http://localhost:8090/transacoes \
  --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001' \
  --form transacoes=${PATH_PROJETO}/desafio-dev/CNAB.txt
```