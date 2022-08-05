import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPosts/DisplayPost';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [post, setPost] =useState([])

  function addNewPost(post){
    let tempPost = [...post, post];

    setPosts(tempPost)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
