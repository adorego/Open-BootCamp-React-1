import './App.css';

import ComponentA from './components/containers/ComponentA'
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header> */}
      <main>
        <ComponentA />
      </main>
    </div>
  );
}

export default App;
