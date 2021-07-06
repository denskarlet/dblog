import { getPostData, getAllPosts } from '../../lib/index';

const Posts = ({posts}:any) => {
  console.log({posts})
  return <div>This is gonna be my blog</div>;
};

export default Posts;

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};
