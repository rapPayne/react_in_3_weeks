import logo from './logo.svg';
import { useEffect } from 'react'
import './App.css';
import { People } from './People';

function App() {
  //useEffect(() => document.title = "People", [])
  return (
    <>
      <header>
      </header>
      <main>
        <People />
      </main>
      <footer>
        Copyright us.com, 2023
      </footer>
    </>
  );
}

export default App;
