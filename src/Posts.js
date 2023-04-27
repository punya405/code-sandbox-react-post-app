import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <div>
      {post.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default Posts;
