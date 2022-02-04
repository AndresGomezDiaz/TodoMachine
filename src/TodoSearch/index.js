import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch () {
	const { searchValue, setSearchValue } = React.useContext(TodoContext);
	
	const onSearchValueSearch = (event) => {
		// console.log(event.target.value);
		setSearchValue(event.target.value);
	}
	// En react puedo retornar valores entre parentesis, pero cuando son varios, todos tienen que estar dentro de un elemnto padre
	// pero de igual forma puedo enviar un array de elementos.
	return (
		<input 
			className="TodoSearch" 
			placeholder="Busca una tarea" 
			value={searchValue}
			onChange={onSearchValueSearch}
		/>
	);
}

export { TodoSearch }