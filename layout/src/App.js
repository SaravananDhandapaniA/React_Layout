
import './App.css';
import Header from './components/Header/Header';
import Nav  from './components/Navigation_bar/Nav';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
