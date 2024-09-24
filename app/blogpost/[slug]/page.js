import matter from "gray-matter";
import fs from 'fs';
import path from 'path';
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code";


export default async function BlogPost({ params }) {
    const filepath = path.join(process.cwd(), 'app', 'content', `${params.slug}.md`);

    let fileContent;
    try {
        fileContent = fs.readFileSync(filepath, "utf-8");
    } catch (err) {
        console.error('Error reading file:', err);
        return <div>File not found or an error occurred.</div>;
    }

    const { content, data } = matter(fileContent);

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
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
    
    return (
        <div className="max-w-5xl m-2 mx-auto p-6 rounded-lg shadow-lg ">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg mb-2 ">Author:<strong className="italic">{data.author}</strong> </p>
            <p className="text-lg mb-2 border-l-4 p-2" ><strong></strong>&quot; {data.description}&quot;</p>
            <p className="text-lg mb-4"><strong>Date:</strong> {data.date}</p>
            <div className="prose dark:prose-invert" style={{ lineHeight: '1.8' }} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
    );
}