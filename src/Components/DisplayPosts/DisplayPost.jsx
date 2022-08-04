import Post from "../PostView/Post";


const DisplayPost = (props) => {
    return ( 
        <div className="display-post-wrap">
            {props.posts.map((post)=> {
                    return(
                       <Post  currentPost= {post}></Post>
                    )
                })}
        </div>
     );
}
 
export default DisplayPost;