import { useEffect, useState } from 'react';
import axios from "axios";
import Post from './components/Post';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/landingpage/navbar/NavBar';
// import NavBar from './components/NavBar';
// import Contact from './components/Contact';


const api = "/recipes"

function App() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await axios.get(api);
    setPost(response.data);
  };

  return (
    <div className="container-fluid">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/post' element={<Post posts={post} loadPosts={loadPosts} />} ></Route>
        {/* <Route exact path='/contact' element={<Contact />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
