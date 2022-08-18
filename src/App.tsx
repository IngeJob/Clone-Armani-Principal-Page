
import './App.css';
import Header from './container/Header/Header';
import PromoBar from './components/PromoBar/PromoBar';
import Main from './container/Main/Main';
import Footer from './container/Footer/Footer';

function App() {

  return (
    <div className="App">
      <PromoBar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
