import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


function AppUI() {
	const {
	      		error,
	      		loading,
	      		searchedTodos,
	      		completeTodo,
	      		deleteTodo,
	      		openModal,
	      		setOpenModal,
	      		completedTodos, 
	      		totalTodos,
	      		searchValue, 
	      		setSearchValue
	      	} = React.useContext(TodoContext);

	return (
		<React.Fragment>
	      <TodoHeader>
	      	<TodoCounter 
		      	totalTodos = {totalTodos}
		      	completedTodos = {completedTodos} 
		    />
		    <TodoSearch 
		     	searchValue = {searchValue}
		      	setSearchValue = {setSearchValue}
		    />
	      </TodoHeader>
	      <TodoList>
				{error && <p>Tuvimos un error</p>}
				{loading && <p>Estamos procesando la información</p>}
				{(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo</p>}

				{searchedTodos.map( todo => (
				  <TodoItem 
				    key={todo.text} 
				    text={todo.text} 
				    completed={todo.completed}
				    onComplete={ () => completeTodo(todo.text) }
				    onDelete={ ()=> deleteTodo(todo.text) }
				  />
				))}
			</TodoList>
			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
	      
	      <CreateTodoButton 
	      		setOpenModal={setOpenModal}
	      		openModal={openModal}
	      />
	    </React.Fragment>
	); 
}

export { AppUI };

