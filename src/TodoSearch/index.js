import React from 'react';
import './TodoSearch.css';

function TodoSearch ({ searchValue, setSearchValue }) {
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