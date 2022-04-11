import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import DenseTable from './components/Table/Main';
import Footer from './components/Footer/Footer'
import Subheader from './components/Subheader/Subheader'

function App() {
  return (
   <>
   <Header/>
   <Subheader/>
   <DenseTable/>
   <Footer/>
   </>
  );
}

export default App;
