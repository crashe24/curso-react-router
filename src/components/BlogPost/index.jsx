import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "../../fake/blogData";
import { useAuth } from "../../auth";

const BlogPost = () => {
    
    const navigate = useNavigate()
    const {slug} = useParams()
    const auth = useAuth()
    const post = blogData.find(pos => pos.slug ===slug)

    //console.log('auth.user.usename', auth.user?.username)
    const couldDelete = auth.user?.isAdmin || post.author.toLocaleLowerCase() === auth.user?.username.toLocaleLowerCase()

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
      {couldDelete && (
        <button> Eliminar Blog</button>
      )}
    </div>
  );
}

export { BlogPost };
