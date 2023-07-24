// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
   
  <Navbar title="TextUtils"/>
  <div className="container my-4" mx-2>
     <TextForm heading="Enter Your Text "/>
  </div>
 

    </>
  );
}

export default App;
