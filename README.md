# 🛠️ MechMasterNode: Sistema de Ordens de Serviço (OS) para Mecânica de Carros (Node.js)

<hr>

## **Visão Geral do Projeto**

O **MechMasterNode** é uma aplicação backend fundamental, desenvolvida usando **Node.js puro** e **Express.js**, que simula um sistema simplificado de gerenciamento de Ordens de Serviço (OS) para mecânicas automotivas.

Este projeto foi concebido como um exercício abrangente de um curso profissional de Node.js. Seu principal objetivo é focar rigorosamente na **arquitetura do projeto**, na **separação de responsabilidades (SoC)** e nos **padrões de codificação modernos**, em vez de se concentrar na persistência de dados.

**⚠️ Atenção:** Esta aplicação foi intencionalmente desenvolvida **sem o uso de um banco de dados**. Todos os dados são gerenciados em memória ou através de **arquivos JSON** para priorizar a demonstração de uma estrutura de aplicação escalável, roteamento limpo e a implementação clara da lógica de negócios.

<hr>

## **Conceitos Chave e Objetivos de Aprendizado**

Este projeto serve como uma referência sólida para a aplicação de **boas práticas de engenharia de software** em um ambiente Node.js:

### **1. Separação de Responsabilidades (SoC)**

O princípio central aplicado é dividir a base de código em camadas distintas e focadas. Essa separação garante que as alterações em uma camada (por exemplo, a visualização) não exijam mudanças em outra (a lógica de negócios).

- **Rotas (Routes):** Gerenciam puramente as requisições de entrada, definem métodos HTTP e delegam tarefas. Não devem conter nenhuma lógica de negócios.

- **Controladores (Controllers):** Atuam como a ponte entre a Rota e o Modelo/Serviço. Eles processam os dados da requisição (parsing de inputs), executam a lógica de negócios necessária (chamando um método de serviço ou modelo) e preparam a resposta final.

- **Modelos/Serviços (Models/Services):** Contêm a lógica de negócios real, a manipulação de dados e as interações com fontes de dados (mesmo que sejam arquivos JSON).

### **2. Arquitetura em Camadas (semelhante ao MVC)**

O projeto segue um padrão em camadas, garantindo que as regras de negócios (Modelos) sejam independentes do framework web (Rotas / Controladores), facilitando testes unitários e a substituição de tecnologias futuras.

<hr>

## **Pré-requisitos**

Antes de executar este projeto, você precisa ter o seguinte instalado:

- **Node.js** (v18.x ou mais recente)
- **npm** ou **Yarn**

<hr>

## **Instalação e Execução**

Siga estes passos para colocar o projeto em execução localmente:

**1. Clone o repositório:**
```bash
git clone https://github.com/gui-silva-github/mechmasternode.git
cd mechmasternode
```

**2. Instale as dependências:**
```bash
npm install
# ou
yarn install
```

**3. Inicie o servidor:**
```bash
npm start
# ou
yarn start
```

**4. Acesse a aplicação:**

A aplicação estará rodando em `http://localhost:3000` (ou na porta especificada na sua configuração).

<hr>

## **Tecnologias Principais**

- **Node.js & npm:** O ambiente de execução e o gerenciador de pacotes.

- **Express.js:** Framework web minimalista para lidar com roteamento e middleware.

- **EJS (Embedded JavaScript Templating):** Usado para renderizar visualizações HTML dinâmicas.

- **Arquivos JSON:** O gerenciamento de dados é feito através de arquivos JSON para fins de demonstração, pronto para uma integração futura com um banco de dados real (como MongoDB ou PostgreSQL).

<hr>