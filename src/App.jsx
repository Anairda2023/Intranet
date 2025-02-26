
import { BrowserRouter, Routes, Route} from 'react-dom';


import Home from "./pages/home";
import Menu from "./pages/menu";


function App() {
  return (
    <div>

      

      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={(<Home/>)}/>

        <Route path="/menu" element={(<Menu/>)}/>

       

        </Routes>
      
      </BrowserRouter>          
    

    
     
     


    </div>
    
  )
  
}

export default App





