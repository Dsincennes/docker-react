import logo from './amano.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2><b>React and Dockers</b></h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there!
        </p>
        <a
          className="App-link"
          href="https://tracker.gg/valorant/profile/riot/XmanJ%2312345/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Best player in valorant!!
        </a>
        <p></p>
        <a
          className="App-link"
          href="https://tracker.gg/valorant/profile/riot/Awais%23613/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worst player in valorant
        </a>
      </header>
    </div>
  );
}

export default App;
