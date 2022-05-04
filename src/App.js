import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import DenseTable from './components/Table/Main';
import Footer from './components/Footer/Footer'
import Subheader from './components/Subheader/Subheader'
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false);
  const[count,setCount]=useState(0);


  
  async function  getData(){
    const url="http://localhost:8080/HRC-project/Fetch";
    // const header={headers:{'Content-Type': 'application/json'}};
    setLoading(true);
    try{
    const response= await axios.get(url)
   
    let updatedArray=response.data.map((val)=>{
      return {...val,check:false}
    })
    
    
    setData(updatedArray)

    }
    catch(err)
    {
      console.log(err)
    }
    setLoading(false);
    setCount(0)
  }
  useEffect(()=>{
    getData();
  },[])
  return (
   <>
   <Header/>
   <Subheader  data={data} setData={setData} getData={getData} count={count}/>
  { loading?<p style={{color:"white"}}>Loading...</p>:<DenseTable data={data} setData={setData} setCount={setCount} count={count}/>}
   <Footer/>
   </>
  );
}

export default App;
