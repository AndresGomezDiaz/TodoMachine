import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton (props) {

	const onClickButton = () => {
		// props.setOpenModal(true);
		// if(props.openModal) props.setOpenModal(false);
		//props.setOpenModal(!props.openModal);
		props.setOpenModal(prevState => !prevState);
	};
	// Los eventos onClick dentro de las funciones de React deben ser especificadas dentro de una arrow function de lo contrario se ejecutarán al iniciar la carga.
	return (
		<button 
			className="CreateTodoButton"
			onClick={onClickButton}
		>
		+
		</button>
	);
}

export { CreateTodoButton }