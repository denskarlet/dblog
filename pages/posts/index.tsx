import Link from 'next/link';

import { getPostData, getAllPosts } from '../../lib/index';

const Posts = ({ posts }: any) => {
  return (
    <div>
      This is gonna be my blog
      {posts.map(({ data }: any) => {
        const { displayName, id } = data;
        return (
          <Link key={id} href={`/posts/${id}`}>
            <a>{displayName}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};
