import { Outlet } from "react-router-dom";
import { BlogLink } from "../../components/BlogLink";
import { blogData } from "../../fake/blogData";



const BlogPage = () => {


    return (
      <>
        <h2>Blog de pagina</h2>
        <Outlet />
        <ul>
          {blogData.map(post => {
           return  <BlogLink key={post.slug} post={post}/>
          })}

        </ul>

      </>
    );
  }
  

  
  export { BlogPage };
  