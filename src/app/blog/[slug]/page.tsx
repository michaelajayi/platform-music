import { getMusicPostBySlug } from "@/app/utils/global";
import BlogPostArticleContent from "@/components/blog-post-article-content";
import BlogPostArticleHeader from "@/components/blog-post-article-header";
import BlogPostNavigation from "@/components/blog-post-navigation";
import BlogPostTags from "@/components/blog-post-tags";
import { BlogPostPageProps } from "@/interfaces/blog.interface";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import blogMaze from "../../../../public/images/blog-maze.svg";

const BlogPost = async ({ params }: BlogPostPageProps) => {
  const post = getMusicPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="relative w-full min-h-screen bg-black border-b-[.5px] border-[#999]">
      {/* Background maze */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={blogMaze}
          alt="Maze"
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 pt-[80px]">
        {/* Back button */}
        <div className="px-5 lg:px-20 py-[5rem]">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-white hover:text-[#058AE3] transition-colors duration-200"
          >
            <FaArrowLeft color="#fff" size={20} />
            <span className="text-lg">Back to Blog</span>
          </Link>
        </div>

        {/* Article header */}
        <BlogPostArticleHeader post={post} />

        {/* Featured image */}
        <div className="px-5 lg:px-20 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-[300px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-800">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  quality={100}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Featured Image</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Article content */}
        <BlogPostArticleContent post={post} />

        {/* Tags */}
        <BlogPostTags post={post} />

        {/* Navigation buttons */}
        <BlogPostNavigation currentPost={post} />
      </div>
    </section>
  );
};
export default BlogPost;
