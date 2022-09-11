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
      <footer>Coded by Marta Pauk</footer>
    </div>
  );
}

export default App;
