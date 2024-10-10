import { useLocalStorage } from '../composable/local-storage/use-localstorage';
import { reactive, ref } from 'vue';

const { setItemLocalStorage, getItemLocalStorage } = useLocalStorage();

let todos = reactive({ data: [] });
let nextId = 1
const newTitle = ref('')

const adicionarTarefa = (novaTarefa) => {
  novaTarefa.id = nextId++
  todos.data.unshift(novaTarefa);
  setItemLocalStorage('newtask', JSON.stringify(todos.data));
}

const deletarTarefa = (id) => {
  const index = todos.data.findIndex(task => task.id === id);
  if (index !== -1) {
    todos.data.splice(index, 1);
    setItemLocalStorage('newtask', JSON.stringify(todos.data))
  }
};

const editarTarefa = (id) => {
  const index = todos.data.findIndex(task => task.id === id);
  if (index !== -1) {
    todos.data[index] = { ...todos.data[index], title: newTitle };
    setItemLocalStorage('newtask', JSON.stringify(todos.data))
  }
}

const initData = () => {
  const todoData = getItemLocalStorage("newtask");
  todos.data = todoData ? JSON.parse(todoData) : [];
  console.log(todos.data);

  if (todos.data.length > 0) {
    nextId = Math.max(...todos.data.map(todo => todo.id)) + 1;
  }
}

export function useTodos() {
    return {
        todos,
        adicionarTarefa,
        deletarTarefa,
        editarTarefa,
        initData,
        newTitle
    }
}