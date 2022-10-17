import logo from './assets/mastLogo.jpg';
import './App.css';
import Header from './components/header.js';
import Design from './components/design';
import Competition from './components/Competition';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Team from './components/Team';
import TabIcon from './assets/MAST - colour.png'
import AppendHead from 'react-append-head';

function App() {
  return (
    <div className="App">
      
      <body>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" />
        <p>
          <b>Coming Soon</b>
        </p>
      </header> */}
      <Header />
      <div class="containers">
        <Team />
        <Competition />
        <Sponsors />
      </div>
      <div class="footer">
        <Contact />
      </div>
      </body>
    </div>
  );
}

export default App;
