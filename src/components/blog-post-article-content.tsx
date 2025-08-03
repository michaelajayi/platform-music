import { IBlogPost } from "@/interfaces/blog.interface";

interface BlogPostArticleContentProps {
  post: IBlogPost;
}

const BlogPostArticleContent = ({ post }: BlogPostArticleContentProps) => {
  return (
    <div className="px-5 lg:px-20 mb-16">
      <div className="max-w-4xl mx-auto">
        <div
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            color: "#e5e7eb",
            lineHeight: "1.75",
          }}
        />
      </div>
    </div>
  );
};

export default BlogPostArticleContent;
