
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Title from './components/Title';
import Collection from './components/Collection';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Text from './components/Text';

function App() {
  return (
    <div>
      <div className='header-container'>
      <Header/>
      </div>  

      <div className='navbar-container'>
      <Navbar/>
      <Navbar2/>
      </div>  
      <div>
        <Title/>
      </div>

      <div className='text'>
        <Text/>

      </div>
      
      <div className='my-collection'>
        <Collection/>
      </div>


      <div className='footer-collection'>
        <Footer/>
      </div>

      <div className='copyright'>
        <Copyright/>
      </div>

      
      
      
    </div>
  );
}

export default App;
