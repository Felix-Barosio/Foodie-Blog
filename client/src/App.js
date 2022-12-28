import { useEffect, useState } from 'react';
import axios from "axios";


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
      <NavBar />
    </div>
  );
}

export default App;
