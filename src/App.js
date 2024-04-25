/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Placeholder components for your programs
function Home() {
  return <h2>Home Page</h2>;
}

function Program1() {
  return <h2>Program 1</h2>;
}

function Program2() {
  return <h2>Program 2</h2>;
}

function Program3() {
  return <h2>Program 3</h2>;
}

function Program4() {
  return <h2>Program 4</h2>;
}

function Program5() {
  return <h2>Program 5</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/program1">Program 1</Link>
              </li>
              <li>
                <Link to="/program2">Program 2</Link>
              </li>
              <li>
                <Link to="/program3">Program 3</Link>
              </li>
              <li>
                <Link to="/program4">Program 4</Link>
              </li>
              <li>
                <Link to="/program5">Program 5</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Program1" element={<Program1 />} />
            <Route path="/Program2" element={<Program2 />} />
            <Route path="/program3" element={<Program3 />} />
            <Route path="/program4" element={<Program4 />} />
            <Route path="/program5" element={<Program5 />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
