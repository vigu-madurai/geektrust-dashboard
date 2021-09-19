import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header>
        GeekTrust Frontend Challenge | Dashboard
      </header>
      <section className="section">
        <SearchBar />
        {JSON.stringify(userData)}
      </section>
      <footer>
        Creator: Vigneshwaran Kannan | kvigneshwaranit@gmail.com
      </footer>
    </div>
  );
}

export default App;
