import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import GetSiteData from './services/siteData';
import { useEffect, useState } from 'react';

function App() {
  
  const [globalSiteDatas, setglobalSiteData] = useState();

  const globalSiteData = async () => {
      const siteData =  await GetSiteData();
      setglobalSiteData(siteData);
  }

  useEffect(() => {
    globalSiteData();
  }, []);

  return globalSiteDatas ? (
    <div className="App">
      <header className="App-header">
          <Header globalSiteData={globalSiteDatas}> </Header>
      </header>
      <main>
          <Hero globalSiteData={globalSiteDatas}> </Hero>
      </main>
    </div>
  ) : null;
}

export default App;
