import { getNextPost, getPreviousPost } from "@/app/utils/global";
import { IBlogPost } from "@/interfaces/blog.interface";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface BlogPostNavigationProps {
  currentPost: IBlogPost;
}


const BlogPostNavigation = ({ currentPost }: BlogPostNavigationProps) => {
  const previousPost = getPreviousPost(currentPost.id);
  const nextPost = getNextPost(currentPost.id);
  
  return (
    <div className="px-5 lg:px-20 pt-10 pb-20 lg:pb-[10rem]">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              {/* Previous Post */}
              <div className="flex-1">
                {previousPost ? (
                  <Link
                    href={`/blog/${previousPost.slug}`}
                    className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <FaArrowLeft size={20} className="group-hover:transform group-hover:-translate-x-1 transition-transform duration-200" />
                    <div className="text-left">
                      <p className="text-sm text-gray-500 mb-1">Previous Post</p>
                      <p className="text-base font-medium line-clamp-2 max-w-[200px] lg:max-w-[300px]">
                        {previousPost.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-center space-x-3 text-gray-600 cursor-not-allowed">
                    <FaArrowLeft size={20} />
                    <div className="text-left">
                      <p className="text-sm text-gray-600 mb-1">Previous Post</p>
                      <p className="text-base">No previous post</p>
                    </div>
                  </div>
                )}
              </div>
    
              {/* Next Post */}
              <div className="flex-1">
                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group flex items-center justify-end space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Next Post</p>
                      <p className="text-base font-medium line-clamp-2 max-w-[200px] lg:max-w-[300px]">
                        {nextPost.title}
                      </p>
                    </div>
                    <FaArrowRight size={20} className="group-hover:transform group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                ) : (
                  <div className="flex items-center justify-end space-x-3 text-gray-600 cursor-not-allowed">
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Next Post</p>
                      <p className="text-base">No next post</p>
                    </div>
                    <FaArrowRight size={20} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
  );
};

export default BlogPostNavigation;