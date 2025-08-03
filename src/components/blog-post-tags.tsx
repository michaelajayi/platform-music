import { IBlogPost } from "@/interfaces/blog.interface";

interface BlogPostTagsProps {
  post: IBlogPost;
}

const BlogPostTags = ({ post }: BlogPostTagsProps) => {
  return (
    <div className="px-5 lg:px-20 mb-16">
      <div className="max-w-4xl mx-auto">
        <div className="border-t-[.5px] border-[#999] pt-8">
          <h3 className="text-white text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostTags;
