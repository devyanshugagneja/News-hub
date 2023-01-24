//import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0)
  
  
  
  
    return (
      <>
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={ setprogress} apiKey={apiKey}  pageSize={9} key="general" country={"in"} category={"general"}/>}></Route>
          <Route exact path="/home" element={<News setProgress={ setprogress} apiKey={apiKey}  pageSize={9} key="general" country={"in"} category={"general"}/>}></Route>
          <Route exact path="/science" element={<News setProgress={ setprogress} apiKey={ apiKey}  pageSize={9} key="science" country={"in"} category={"science"}/>}></Route>
          <Route exact path="/technology" element={<News setProgress={ setprogress} apiKey={ apiKey}  pageSize={9} key="technology" country={"in"} category={"technology"}/>}></Route>
          <Route exact path="/sports" element={<News setProgress={ setprogress} apiKey={ apiKey}  pageSize={9} key="sports" country={"in"} category={"sports"}/>}></Route>
          <Route exact path="/health" element={<News setProgress={ setprogress} apiKey={ apiKey}  pageSize={9} key="health" country={"in"} category={"health"}/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={ setprogress} apiKey={ apiKey}  pageSize={9} key="entertainment" country={"in"} category={"entertainment"}/>}></Route>
          <Route exact path="/business" element={<News setProgress={ setprogress} apiKey={ apiKey}  pageSize={9} key="business" country={"in"} category={"business"}/>}></Route>
        </Routes>
      </Router>
      
      <div className="container">
      
      </div>
      </>
    );
  }
  export default App;

