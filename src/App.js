import './App.css';
import Cartitem from './components/Cartitem';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cartitem' element={<Cartitem/>} />
        
      </Routes> 
      

      <Footer/>         
    </div>
  );
}

export default App;
