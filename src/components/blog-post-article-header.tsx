import { formatDate } from "@/app/utils/global";
import { IBlogPost } from "@/interfaces/blog.interface";

interface BlogPostArticleHeaderProps {
  post: IBlogPost;
}

const BlogPostArticleHeader = ({ post }: BlogPostArticleHeaderProps) => {
  return (
    <div className="px-5 lg:px-20 mb-12">
      <div className="max-w-4xl mx-auto">
        {/* Category and date */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="px-3 py-1 bg-[#058AE3] text-white text-sm rounded-full">
            {post.category}
          </span>
          <span className="text-gray-400 text-sm">
            {formatDate(post.publishedAt)}
          </span>
          <span className="text-gray-400 text-sm">
            {post.readTime} min read
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author info */}
        <div className="flex items-center space-x-4 pb-8 border-b-[.5px] border-[#999]">
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center aspect-square">
            <span className="text-white font-semibold text-lg">
              {post.author.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-white font-medium">{post.author.name}</p>
            <p className="text-gray-400 text-sm">{post.author.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostArticleHeader;
