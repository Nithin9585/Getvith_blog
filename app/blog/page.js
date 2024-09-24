import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
let blogs = [];

try {
  const contentPath = path.join(process.cwd(), 'app', 'content');
  const dirContent = fs.readdirSync(contentPath, 'utf-8');
  blogs = dirContent.map(file => {
    const fileContent = fs.readFileSync(path.join(contentPath, file), 'utf-8');
    const { data } = matter(fileContent);
    return data;
  });
} catch (error) {
  console.error("Error reading content directory:", error);
}

const Blog = () => {
  return (
    <div className="min-h-screen">
        <div className="container mx-auto p-10">
          <h1 className="text-2xl font-bold pd-20 text-center">Blog Page</h1>
        </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index} className="p-6 rounded-lg border-2 border-purple-300 shadow-lg">
                <img src={blog.image} alt={blog.title} className="mb-4 w-full h-48 object-cover rounded-lg" />
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>
                  Click here
                </Link>
                <div className="text-sm mt-2">
                  <p>{blog.date}</p>
                  <p>By {blog.author}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
