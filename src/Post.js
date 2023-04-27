const Post = ({ post }) => {
  return (
    <ul>
      <li>{post.userId}</li>
      <li>{post.id}</li>
      <li>{post.title}</li>
    </ul>
  );
};

export default Post;
