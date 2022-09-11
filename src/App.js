import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.jpg";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} alt="logo" className="logo img-fluid" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="m-3">
        <a
          href="https://github.com/marta0220/dictionary-project"
          target="_blank"
        >
          Open-source code by Marta Pauk
        </a>
      </footer>
    </div>
  );
}

export default App;
