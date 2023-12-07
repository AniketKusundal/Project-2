import "./App.css";
import React, {useState} from 'react'
import NavBar from "./componantes/NavBar";
import News from "./componantes/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App =()=> {
 const pageSize = 12;

  const [progress , setProgress] = useState(0)

    return (
     
      <div>
      <Router>
      <NavBar/>
      <LoadingBar color='#3647DD' progress={progress} />
      
       
        <Routes>

          {/* Route 1 */}
            <Route exact  path="/" element={<News  setProgress={setProgress}    key="General"  pageSize={pageSize}  country='in' category='General'/>}></Route>
          {/* End Of  Route 1 */}

          {/* Route 2 */}
            <Route exact  path="/Business" element={<News  setProgress={setProgress}   key="Business"  pageSize={pageSize}  country='in' category='Business'/>}></Route>
          {/* End Of  Route 2 */}


          {/* Route 3 */}
            <Route exact path="/Entertainment" element={<News  setProgress={setProgress}   key="Entertainment" pageSize={pageSize}  country='in' category='Entertainment'/>}></Route>
          {/* End Of  Route 3 */}



          {/* Route 4 */}
            <Route exact path="/Health" element={<News  setProgress={setProgress}   key="Health"  pageSize={pageSize}  country='in' category='Health'/>}></Route>
          {/* End Of  Route 4 */}


          
            <Route exact path="/Science" element={<News  setProgress={setProgress}   key="Science" pageSize={pageSize}  country='in' category='Science'/>}></Route>
            <Route exact path="/Sports" element={<News  setProgress={setProgress}  pageSize={pageSize} key="Sports"  country='in' category='Sports'/>}></Route>

            
            <Route exact path="/Technology " element={<News  setProgress={setProgress}  key="Technology" pageSize={pageSize}  country='in' category='Technology'/>}></Route>
       </Routes>
       
      </Router>
       
      </div>
    )
  
}

export default App;

