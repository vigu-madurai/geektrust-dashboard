import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { apiUrl, USER_API } from './utils/api';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
    async function getUserData () {
      return await fetch(apiUrl[USER_API].url).then(response => {
        if (response.ok)
          return response.json();
      }).then(data => {
        return setUserData(data);
      }).catch(err => {
        console.log("Get User Data fails: ", err.msg)
        return err.msg;
      });
    }
  }, []);
  
  return (
    <div className="App">
      <header>
        GeekTrust Frontend Challenge | Dashboard
      </header>
      <section className="section">
        <SearchBar userData={userData} />
      </section>
      <footer>
        Creator: Vigneshwaran Kannan | kvigneshwaranit@gmail.com
      </footer>
    </div>
  );
}

export default App;
