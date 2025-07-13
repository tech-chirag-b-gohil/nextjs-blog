import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostFileNames() {
  return fs.readdirSync(postsDirectory); // Read the directory and return file names
}

export function getPostData(postIdentifier) {
  const slug = postIdentifier.replace(/\.md$/, ''); // Remove the .md extension
  const filePath = path.join(postsDirectory, `${slug}.md`); // Construct the file path
  const fileContents = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContents); // Parse the markdown file

  return {
    slug,
    content,
    ...data,
  };
}

export function getAllPosts() {
  const filenames = getPostFileNames();
  const posts = filenames.map((filename) => {
    return getPostData(filename);
  });

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
}
