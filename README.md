# Documentação da API de Gerenciamento de Produtos

## Descrição Geral
A API de Gerenciamento de Produtos é uma interface que permite a criação, leitura, atualização e exclusão de produtos em um sistema de gerenciamento de inventário. Esta API foi desenvolvida para facilitar a integração com diferentes sistemas e fornecer uma maneira eficiente de gerenciar produtos.

## Objetivos
- Facilitar a integração com sistemas de gerenciamento de inventário.
- Prover uma interface simples e eficiente para operações CRUD (Create, Read, Update, Delete) de produtos.
- Garantir a segurança e integridade dos dados dos produtos.

## Funcionalidades
- **Criar Produto**: Permite a criação de novos produtos no sistema.
- **Listar Produtos**: Retorna uma lista de todos os produtos cadastrados.
- **Atualizar Produto**: Permite a atualização das informações de um produto existente.
- **Excluir Produto**: Remove um produto do sistema.

## Tecnologias Utilizadas
- **Linguagem de Programação**: Node.js
- **Framework**: Express.js
- **Banco de Dados**: MongoDB
- **Autenticação**: JWT (JSON Web Tokens)
- **Documentação**: Swagger

## Exemplos de Requisições e Respostas

### Criar Produto
**Requisição:**
```http
POST /api/produtos
Content-Type: application/json
Authorization: Bearer {token}

{
    "nome": "Produto Exemplo",
    "descricao": "Descrição do produto exemplo",
    "preco": 100.00,
    "estoque": 50
}
```

**Resposta:**
```http
HTTP/1.1 201 Created
Content-Type: application/json

{
    "id": "60c72b2f9b1e8a001c8e4d5a",
    "nome": "Produto Exemplo",
    "descricao": "Descrição do produto exemplo",
    "preco": 100.00,
    "estoque": 50,
    "createdAt": "2023-10-01T12:00:00Z",
    "updatedAt": "2023-10-01T12:00:00Z"
}
```

### Listar Produtos
**Requisição:**
```http
GET /api/produtos
Authorization: Bearer {token}
```

**Resposta:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "id": "60c72b2f9b1e8a001c8e4d5a",
        "nome": "Produto Exemplo",
        "descricao": "Descrição do produto exemplo",
        "preco": 100.00,
        "estoque": 50,
        "createdAt": "2023-10-01T12:00:00Z",
        "updatedAt": "2023-10-01T12:00:00Z"
    }
]
```

### Atualizar Produto
**Requisição:**
```http
PUT /api/produtos/{id}
Content-Type: application/json
Authorization: Bearer {token}

{
    "nome": "Produto Exemplo Atualizado",
    "descricao": "Descrição atualizada do produto exemplo",
    "preco": 120.00,
    "estoque": 40
}
```

**Resposta:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "60c72b2f9b1e8a001c8e4d5a",
    "nome": "Produto Exemplo Atualizado",
    "descricao": "Descrição atualizada do produto exemplo",
    "preco": 120.00,
    "estoque": 40,
    "createdAt": "2023-10-01T12:00:00Z",
    "updatedAt": "2023-10-01T12:30:00Z"
}
```

### Excluir Produto
**Requisição:**
```http
DELETE /api/produtos/{id}
Authorization: Bearer {token}
```

**Resposta:**
```http
HTTP/1.1 204 No Content
```

## Instruções de Instalação
1. Clone o repositório:
     ```bash
     git clone https://github.com/seu-usuario/nome-do-repositorio.git
     ```
2. Navegue até o diretório do projeto:
     ```bash
     cd nome-do-repositorio
     ```
3. Instale as dependências:
     ```bash
     npm install
     ```
4. Configure as variáveis de ambiente no arquivo `.env`:
     ```env
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/nome-do-banco
     JWT_SECRET=sua_chave_secreta
     ```
5. Inicie o servidor:
     ```bash
     npm start
     ```

A API estará disponível em `http://localhost:3000`.
<br>
<hr>

## IMPORTANTE: 
Caso não deseje usar Postman/Insomnia, pode testar os comandos diretamente no terminal com o 'curl'. Basta adaptar os exemplos abaixo!

   ### 1. Criar primeiro produto
    curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -d '{"name": "Notebook", "price": 2500}'
    
   ### 2. Criar segundo produto
    curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -d '{"name": "Mouse", "price": 50}'
    
   ### 3. Listar todos os produtos
    curl http://localhost:3000/api/products
    
   ### 4. Buscar produto específico (ID 1)
    curl http://localhost:3000/api/products/1
    
   ### 5. Atualizar produto (ID 1)
    curl -X PUT http://localhost:3000/api/products/1 -H "Content-Type: application/json" -d '{"name": "Notebook Dell", "price": 3000}'
    
   ### 6. Verificar atualização
    curl http://localhost:3000/api/products/1
    
   ### 7. Excluir produto (ID 2)
    curl -X DELETE http://localhost:3000/api/products/2
    
   ### 8. Listar novamente para confirmar exclusão
    curl http://localhost:3000/api/products
<hr>

**Autor**: Sander Gustavo Piva
