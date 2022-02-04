import React from 'react';
import { useLocalStorage } from './useLocalStorage';
/*
Create context nos sirve para crear providers y consumers
que sirven para compartir estados en una app
*/

const TodoContext =  React.createContext();

function TodoProvider(props) {

	// Cuando el estado devuelva mas elementos entonces lo podemos recibir como un objeto
  	//const[todos, saveTodos] = useLocalStorage('TODOS_LIST', []);
  	
	const {
	    item : todos,
	    saveItem : saveTodos,
	    loading,
	    error
	} = useLocalStorage('TODOS_LIST', []);
	  
	const [searchValue, setSearchValue] = React.useState('');

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (!searchValue.length >= 1) {
		searchedTodos = todos 
	} else {
		//Si usamos find tendríamos el problema que solo mandaría un resultado hasta que sea exacto.
		searchedTodos = todos.filter(todo => {
		  const todoText = todo.text.toLowerCase();
		  const searchText = searchValue.toLowerCase();
		  return todoText.includes(searchText);
		});
	}


	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		// Debido a que no se puede asignar directamente el nuevo valor sobre el elemento todo, se tiene que usar mediante el estado 
		// que es setTodos, pero partiendo de un nuevo elemento
		// Primero creamos un nuevo array con los mismos elementos del array todos
		const newTodos = [...todos];
		//Le asignamos a ese nuevo elemento el valor de completado
		newTodos[todoIndex].completed = true;
		// Asignamos mediante el estado el nuevo arreglo para que se haga de nuevo un render.
		saveTodos(newTodos);
	};

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	// useEffect sirve para ejecutar codigo cada cierto momento o tiempo
	// Si enviamos un array vacío se ejecuta solo una vez cada que se renderice 
	/*React.useEffect(() => {

	}, [])*/

	// Hacer que se jecute cada que un evento surja
	/*React.useEffect(() => {

	}, [totalTodos]);*/


	return (
		<TodoContext.Provider value={{
			loading,
			error,
			completedTodos,
			totalTodos,
			searchValue,
			setSearchValue,
			searchedTodos,
			completeTodo,
			deleteTodo
		}}>
			{props.children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };