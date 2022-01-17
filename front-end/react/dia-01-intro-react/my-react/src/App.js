import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Content from './Content';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <Content />
        <Footer />
      </header>
    </div>
  );
}

export default App;
