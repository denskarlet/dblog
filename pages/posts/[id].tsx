import { getPostsIds, getPostData } from '../../lib/index';

interface PostProps {
  postData: any;
}
const Post = ({ postData }: PostProps) => {
  return <div dangerouslySetInnerHTML={{ __html: postData.htmlContent }} />;
};

export const getStaticProps = async ({ params }: any) => {
  const postData = await getPostData(params.id + '.mdx');
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getPostsIds();
  return {
    paths,
    fallback: false,
  };
};

export default Post;
