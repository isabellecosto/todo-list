# Requisitos da To Do List em Vue.js com Sass

## Feature: Gerenciamento de Tarefas

### Cenário: Adicionar uma nova tarefa à lista
- **Dado** que eu estou na página da To Do List
- **Quando** eu insiro uma nova tarefa no campo de texto
- **E** clico no botão "Adicionar"
- **Então** a nova tarefa deve aparecer no topo da lista de tarefas pendentes

### Cenário: Marcar uma tarefa como concluída
- **Dado** que eu tenho uma tarefa pendente na lista
- **Quando** eu clico na caixa de seleção ao lado da tarefa
- **Então** a tarefa deve ser marcada como concluída
- **E** a tarefa deve ser movida para a lista de tarefas concluídas

### Cenário: Remover uma tarefa concluída
- **Dado** que eu tenho uma tarefa marcada como concluída
- **Quando** eu clico no ícone de remoção ao lado da tarefa
- **Então** a tarefa deve ser removida da lista

### Cenário: Editar uma tarefa pendente
- **Dado** que eu tenho uma tarefa pendente na lista
- **Quando** eu clico no ícone de edição ao lado da tarefa
- **E** faço as alterações no texto da tarefa
- **E** clico no botão "Salvar"
- **Então** as alterações devem ser refletidas na lista de tarefas

### Cenário: Filtrar tarefas pendentes ou concluídas
- **Dado** que eu estou na página da To Do List
- **Quando** eu clico no filtro "Pendentes"
- **Então** eu devo ver apenas as tarefas pendentes
- **Quando** eu clico no filtro "Concluídas"
- **Então** eu devo ver apenas as tarefas concluídas

### Cenário: Exibir o número total de tarefas pendentes
- **Dado** que eu estou na página da To Do List
- **E** tenho tarefas pendentes
- **Quando** eu olho para o contador de tarefas pendentes
- **Então** o número de tarefas pendentes deve ser exibido corretamente

## Requisitos Funcionais

### 1. Adicionar Tarefa
- O sistema deve permitir que o usuário insira uma nova tarefa em um campo de texto.
- A tarefa deve conter, no mínimo, um **título** (obrigatório) e, opcionalmente, uma **descrição**.
- Ao clicar no botão "Adicionar", a tarefa deve ser inserida no **LocalStorage** do navegador e exibida no topo da lista de tarefas pendentes.
- O campo de texto e a descrição devem ser limpos após a adição da tarefa.
- A tarefa deve ter um identificador único gerado automaticamente.

### 2. Listar Tarefas
- O sistema deve exibir todas as tarefas pendentes em uma lista e todas as tarefas concluídas em uma lista separada.
- As tarefas devem ser carregadas a partir do **LocalStorage** ao abrir ou atualizar a aplicação.
- A lista de tarefas pendentes deve ser exibida no topo da interface, enquanto as tarefas concluídas devem ser exibidas abaixo.

### 3. Marcar Tarefa como Concluída
- O usuário deve poder marcar uma tarefa como concluída clicando em uma caixa de seleção (checkbox) ao lado da tarefa.
- Ao marcar uma tarefa como concluída, ela deve ser movida para a lista de tarefas concluídas e atualizada no **LocalStorage**.
- A tarefa concluída deve ser visualmente diferenciada, utilizando um estilo específico via **Sass** (ex: texto riscado ou opacidade reduzida).

### 4. Remover Tarefa
- O sistema deve permitir que o usuário remova uma tarefa clicando em um ícone de remoção (ex: ícone de lixeira) ao lado da tarefa.
- A tarefa removida deve ser excluída tanto da interface quanto do **LocalStorage**.
- Antes de remover uma tarefa, deve haver uma confirmação por parte do usuário (ex: modal ou alerta de confirmação).

### 5. Editar Tarefa
- O sistema deve permitir que o usuário edite o título e a descrição de uma tarefa pendente.
- Ao clicar no ícone de edição, o título e a descrição da tarefa devem se transformar em campos de edição (inputs).
- O usuário deve poder salvar ou cancelar a edição. Ao salvar, a tarefa deve ser atualizada tanto na interface quanto no **LocalStorage**.
- Se o usuário cancelar, as alterações não devem ser salvas.

### 6. Filtrar Tarefas
- O sistema deve fornecer três filtros para o usuário: "Todas", "Pendentes", e "Concluídas".
- O filtro "Todas" deve exibir tanto tarefas pendentes quanto concluídas.
- O filtro "Pendentes" deve exibir apenas as tarefas que ainda não foram concluídas.
- O filtro "Concluídas" deve exibir apenas as tarefas que foram marcadas como concluídas.
- O filtro selecionado deve ser salvo no **LocalStorage** para que, ao recarregar a página, o estado do filtro seja mantido.

### 7. Contador de Tarefas Pendentes
- O sistema deve exibir um contador dinâmico que mostre o número total de tarefas pendentes.
- O contador deve ser atualizado automaticamente sempre que uma nova tarefa for adicionada ou uma tarefa for marcada como concluída.
- O contador deve ser exibido próximo ao título da lista de tarefas pendentes.

## Requisitos Não Funcionais

### 1. Tecnologias
- O sistema deve ser implementado utilizando o framework **Vue.js (versão 3 ou superior)**.
- Para o gerenciamento de estilos, deve ser utilizado **Sass (SCSS)**, com uma estrutura modular e reutilizável.
- As tarefas devem ser salvas no **LocalStorage** do navegador para garantir que os dados persistam mesmo ao recarregar a página, não sendo necessário um backend ou banco de dados.

### 2. Persistência de Dados
- Todos os dados relacionados às tarefas (título, descrição, estado de pendente ou concluída, e identificador) devem ser armazenados no **LocalStorage**.
- Ao carregar a página, o sistema deve buscar os dados do **LocalStorage** e exibi-los corretamente na interface.
- O estado do filtro de exibição (Todas, Pendentes, Concluídas) deve ser salvo no **LocalStorage** e recuperado ao recarregar a página.

### 3. Performance
- A aplicação deve ser capaz de carregar e manipular até **500 tarefas** sem impacto significativo no desempenho.
- O tempo de resposta para adicionar, remover, marcar como concluída ou editar uma tarefa deve ser inferior a **1 segundo**.

### 4. Responsividade
- A aplicação deve ser totalmente **responsiva**, ajustando-se para funcionar bem em diferentes dispositivos, incluindo smartphones, tablets e desktops.
- O layout deve se adaptar a diferentes tamanhos de tela usando **CSS flexbox** ou **grid**, e os estilos devem ser otimizados para interfaces touch.

### 5. Usabilidade
- A interface deve ser **simples e intuitiva**, com ícones de ação (adicionar, editar, excluir, marcar como concluída) claros e fáceis de identificar.
- O botão "Adicionar" deve ser desativado ou oculto se o campo de título estiver vazio.
- Mensagens de feedback devem ser exibidas ao usuário quando ações importantes são realizadas (ex: tarefa adicionada, editada ou removida com sucesso).

### 6. Design e Estilos (Sass)
- O design deve seguir uma paleta de cores definida, com variações visuais claras entre tarefas pendentes e concluídas (ex: tarefas pendentes em cores mais vivas, concluídas com tons mais suaves).
- Utilizar **Sass** para organizar e modularizar os estilos, separando estilos globais, específicos de componentes e variáveis (ex: variáveis de cores e espaçamentos).
- Deve ser aplicado um design clean e moderno, com espaçamentos consistentes entre os elementos e uma tipografia legível.

### 7. Manutenibilidade
- O código Vue.js deve ser **modularizado**, utilizando componentes Vue para funcionalidades específicas como a lista de tarefas, filtros, contador e cada tarefa individual.
- O sistema deve seguir as boas práticas de desenvolvimento, como **Single Responsibility Principle (SRP)** e **componentes reutilizáveis**.
