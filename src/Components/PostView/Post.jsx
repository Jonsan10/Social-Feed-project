
const Post = (props) => {
    return ( 
        <h1>
            {console.log("Props inside of Post.jsx ", props.currentPost)}
            <p>{props.name}</p>
            <p>{props.userPost}</p>
        </h1>
     );
}
 
export default Post;
