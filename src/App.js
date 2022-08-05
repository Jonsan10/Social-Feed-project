import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPosts/DisplayPost';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [posts, setPosts] =useState([])

  function addNewPost(post){
    let tempPost = [...posts, post];

    setPosts(tempPost)
  }

  return (
    <div>
      <NavBar/>
          <CreatePost addNewPost={addNewPost}/>
          <DisplayPost posts = {posts}/>
    </div>
  );
}

export default App;
