# **Projeto de Login e Cadastro com HTML, CSS e JavaScript**

Este projeto é uma aplicação web simples, composta por um formulário de login e cadastro, utilizando HTML, CSS e JavaScript. O objetivo principal é demonstrar a criação de um site funcional com navegação, formulário interativo e validação de dados.

## **Objetivo**

Desenvolver uma aplicação web que permita aos usuários se cadastrarem e fazerem login, com a funcionalidade de armazenar os dados de login localmente utilizando o `localStorage` do navegador. O sistema de login realiza uma verificação com as informações cadastradas e exibe uma mensagem de sucesso ou erro.

## **Tecnologias Utilizadas**

- **HTML**: Estruturação das páginas e formulários.
- **CSS**: Estilização das páginas, incluindo a navegação e os formulários.
- **JavaScript**: Interatividade do formulário de login e cadastro, e validação dos dados com `localStorage`.

## **Funcionalidades**

- **Página Inicial**:
  - Navegação para diferentes seções (Login, Cadastro).
  - Estilo moderno com efeitos de hover e transições suaves.
  
- **Formulário de Cadastro**:
  - Campos para nome, e-mail e senha.
  - Validação para garantir que todos os campos estão preenchidos.
  - Armazenamento dos dados no `localStorage`.

- **Formulário de Login**:
  - Campos para e-mail e senha.
  - Verificação dos dados armazenados no `localStorage`.
  - Exibição de uma mensagem de erro ou sucesso dependendo do login.

## **Como Usar**

1. **Cadastro**:
   - Preencha os campos de nome, e-mail e senha.
   - Clique em "Cadastrar" para armazenar seus dados no navegador.
   - Após o cadastro, você verá uma mensagem de sucesso e pode fazer login com os dados cadastrados.

2. **Login**:
   - Preencha os campos de e-mail e senha.
   - Clique em "Entrar" para verificar suas credenciais.
   - Se os dados estiverem corretos, será redirecionado para a página de sucesso.
   - Se os dados estiverem incorretos, uma mensagem de erro será exibida.

## **Instruções para Execução**

1. Clone o repositório:
   - git clone https://github.com/seu-usuario/projeto-login.git

2. Navegue até a pasta do projeto:
   - cd projeto-login

3. Abra o arquivo `index.html` em seu navegador para visualizar a aplicação.

## **Estrutura de Pastas**
```
/projeto-login 
|-- index.html # Página inicial
|-- html.html # Página de sucesso após login
|-- styles.css # Arquivo de estilos
|-- script.js # Arquivo de script
|-- README.md # Arquivo de documentação
```


## **Melhorias Futuras**

- Implementar validação mais avançada para os campos do formulário (como validar o formato do e-mail).
- Adicionar uma tela de "Esqueci a senha".
- Tornar o sistema de login mais seguro utilizando técnicas como criptografia.

## **Licença**

Este projeto é de código aberto e está licenciado sob a [MIT License](LICENSE).
