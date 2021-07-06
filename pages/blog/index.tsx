import { getPostData, getAllPosts } from '../../lib/index';

const Blog = () => {
  return <div>This is gonna be my blog</div>;
};

export default Blog;
export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};
