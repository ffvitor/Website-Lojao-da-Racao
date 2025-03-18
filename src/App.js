
import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Shelf from './components/shelf/Shelf';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Shelf/>
      <Footer/>

    </div>
  );
}

export default App;
