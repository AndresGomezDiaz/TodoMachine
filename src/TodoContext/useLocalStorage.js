import React from 'react';

// Este es un custom Hook, los hook inician con useALGO
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [item, setItem] = React.useState(initialValue);

  // Aquí agregamos un hook de useEffect para simular la carga de un API
  React.useEffect(() => {
    setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem;

          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem)
          setLoading(false)
        } catch(error) {
          setError(error)
        }
    }, 1000);
  });
  
  const saveItem = (newItem) => {
    try {
      const sringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, sringifiedItem);
        setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }
  /*const sringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, sringifiedItem);
    setItem(newItem);

  };
  // Por convención si un estado devuelve mas de un objeto, es recomendable retornar en vez de un array un objeto
  // return [
  //   item,
  //   saveItem,
  //   loading,
  // ];*/
  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage };