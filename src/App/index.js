import React from 'react';
import { TodoProvider } from '../TodoContext/';
import { AppUI } from './AppUI';

// import './App.css';

// const defaultTodos = [
//   { text: 'Lavar los trastes', completed: false },
//   { text: 'Limpiar', completed: true },
//   { text: 'Barrer', completed: false },
//   { text: 'Sacudir', completed: true },
// ];

function App() {
  
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
