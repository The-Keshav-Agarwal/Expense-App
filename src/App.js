import React from 'react';
import Navbar from './Components/navbar';
import ItemList from './Components/ItemList';
import ListContextProvider from './contexts/listContext';
import FormContext from './contexts/formContext';

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <Navbar/>
        <FormContext/>
        <ItemList/>
      </ListContextProvider>
    </div>
  );
}

export default App;
