import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "../../fake/blogData";

const BlogPost = () => {
    
    const navigate = useNavigate()
    const {slug} = useParams()
    const post = blogData.find(pos => pos.slug ===slug)

    const returnToBLog = () => {
      //navigate('/blog')
      navigate(-1)
    }
  return (
    <div>
      <h2>{post.title}</h2>
      <button onClick={returnToBLog}>Volver al blog</button>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>

    </div>
  );
}

export { BlogPost };
