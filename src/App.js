import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPosts/DisplayPost';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [post, setPost] =useState([])

  function addNewPost(post){
    let tempPost = [...post, post];

    setPost(tempPost)
  }

  return (
    <div>
      <NavBar/>
        <body className='body'>
          <CreatePost addNewPost={addNewPost}/>
          <DisplayPost post = {post}/>
        </body>

    </div>
  );
}

export default App;
