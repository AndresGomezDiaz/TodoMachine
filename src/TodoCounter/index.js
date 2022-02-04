import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

/*
Podemos agregar estilos en Linea usando la siguiente sintaxis:
const estilo = {
  color: 'red',
  backgroundColor: 'yellow'
}

*/
/*
	En vez de llamar a props podemos ingresarlo como {total, completed}
*/
function TodoCounter () {
	const { completedTodos, totalTodos } = React.useContext(TodoContext);
	return (
		/*<h2 style={estilo}>Has completado 2 de 3 ToDos</h2>*/
		<h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} Tareas</h2>
	);
}

export { TodoCounter };