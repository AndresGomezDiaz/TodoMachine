import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch () {
	const { searchValue, setSearchValue } = React.useContext(TodoContext);
	
	const onSearchValueSearch = (event) => {
		setSearchValue(event.target.value);
	}
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