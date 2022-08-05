
const Post = (props) => {
    return ( 
        <h1>
            {console.log("Props inside of Post.jsx ", props.currentPost)}
            <p>{props.currentPost.name}</p>
            <p>{props.currentPost.userPost}</p>
        </h1>
     );
}
 
export default Post;
