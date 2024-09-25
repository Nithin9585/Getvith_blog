import matter from "gray-matter";
import fs from 'fs';
import path from 'path';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from "rehype-pretty-code";

export async function generateStaticParams() {
    const contentDir = path.join(process.cwd(), 'app', 'content');
    const filenames = fs.readdirSync(contentDir);

    return filenames.map(filename => ({
        slug: filename.replace(/\.md$/, '')
    }));
}

async function getData(slug) {
    const filepath = path.join(process.cwd(), 'app', 'content', `${slug}.md`);

    let fileContent;
    try {
        fileContent = fs.readFileSync(filepath, "utf-8");
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }

    const { content, data } = matter(fileContent);

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: data.title })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            keepBackground: true,
            onVisitLine(node) {
                if (node.children.length === 0) {
                    node.children = [{ type: "text", value: " " }];
                }
            },
            onVisitHighlightedLine(node) {
                node.properties.className.push("highlighted");
            },
            onVisitHighlightedWord(node) {
                node.properties.className = ["word"];
            },
        });

    const htmlContent = (await processor.process(content)).toString();

    return {
        content: htmlContent,
        data
    };
}

export default async function BlogPost({ params }) {
    const { slug } = params;
    const postData = await getData(slug);

    if (!postData) {
        return {
            notFound: true
        };
    }

    const { content, data } = postData;

    return (
        <div className="max-w-5xl m-2 mx-auto p-6 rounded-lg shadow-lg ">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg mb-2">Author: <strong className="italic">{data.author}</strong></p>
            <p className="text-lg mb-2 border-l-4 p-2"><strong></strong>&quot; {data.description}&quot;</p>
            <p className="text-lg mb-4"><strong>Date:</strong> {data.date}</p>
            <div className="prose dark:prose-invert" style={{ lineHeight: '1.8' }} dangerouslySetInnerHTML={{ __html: content }}></div>
            <script async src="/public/gtag.js"></script>
        </div>
    );
}