# Projeto: Sistema de Gestão de Notas Fiscais

## Descrição

Este projeto é um sistema de gestão de notas fiscais desenvolvido utilizando SAP UI5 para a interface do usuário e um backend em C# que fornece uma API para gerenciamento das notas fiscais. A aplicação permite visualizar, adicionar, editar e excluir notas fiscais, além de fornecer detalhes completos sobre cada nota.

## Funcionalidades

- **Visualização de Notas Fiscais**: Exibe uma tabela com todas as notas fiscais, incluindo número da nota, valor, nome do cliente e nome do fornecedor.
- **Detalhes da Nota Fiscal**: Cada linha na tabela tem um botão "Detalhes" que abre um modal exibindo todas as informações da nota fiscal selecionada.
- **API**: Backend implementado para fornecer dados das notas fiscais, permitindo operações de CRUD (Create e Read).

## Estrutura do Projeto

- **Frontend**: Desenvolvido com SAP UI5, incluindo componentes como SmartTable e Dialog.
- **Backend**: API RESTful desenvolvida em C# utilizando ASP.NET Core, servindo dados das notas fiscais.
- **Banco de Dados**: Utilização do MongoDB para armazenamento dos dados das notas fiscais.

## Como Executar

1. Clone o repositório:
    ```sh
    git clone https://github.com/Eduardo007-lang/teste_tecnico_BRGAAP_Frontend.git
    ```

1. **Frontend**:
    - Navegue até o diretório do frontend:
      ```sh
      cd teste_tecnico_BRGAAP_Frontend
      ```
    - Instale as dependências e inicie o servidor do frontend:
      ```sh
      npm install
      http-server webapp
      ```

## Tecnologias Utilizadas

- **SAP UI5**: Framework para desenvolvimento da interface do usuário.
- **C# e ASP.NET Core**: Plataforma para desenvolvimento do backend.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos dados das notas fiscais.

## Image

![image](https://github.com/Eduardo007-lang/teste_tecnico_BRGAAP_Frontend/assets/53060876/730ad1a6-d83c-4614-adfa-31bc06ddcc41)

