import { promises as fs } from 'fs';
import path from 'path';
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';
import matter from 'gray-matter';

const postsDir = path.resolve(process.cwd(), 'lib', 'posts');

type Post = {
  data: string;
};

const getPostData = async (filename: string) => {
  const postPath = path.resolve(postsDir, filename);
  const file = await fs.readFile(postPath);
  const { data, content } = matter(file);
  const htmlContent = await unified().use(markdown).use(html).process(content);
  return {
    data,
    htmlContent: htmlContent.contents,
  };
};

const getAllPosts = async () => {
  const fileNames = await fs.readdir(postsDir);
  const posts = await Promise.all(
    fileNames.map((filename) => getPostData(filename))
  );
  return posts;
};

const getPostsIds = async () => {
  const fileNames = await fs.readdir(postsDir);
  return fileNames.map((filename) => ({
    params: { id: filename.slice(0, -4) },
  }));
};

export { getPostData, getAllPosts, getPostsIds };
