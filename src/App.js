import logo from './logo.svg';
import './App.css';

function Title({children}) {
  return (
    <h1>{children}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Title>HaciaReact ⚛</Title>
      <p>
        Basado en el routemap de React:
        <a href="https://roadmap.sh/react">https://roadmap.sh/react</a>
      </p>
    </div>
  );
}

export default App;
