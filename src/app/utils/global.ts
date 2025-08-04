import { IBlogPost } from "@/interfaces/blog.interface";
import { musicPosts } from "./constants";

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getMusicPostBySlug = (slug: string): IBlogPost | undefined => {
  return musicPosts.find(post => post.slug === slug);
};

export const getPreviousPost = (currentPostId: string): IBlogPost | null => {
  const currentIndex = musicPosts.findIndex(post => post.id === currentPostId);
  
  if (currentIndex <= 0) {
    return null; // No previous post (first post or not found)
  }
  
  return musicPosts[currentIndex - 1];
};

export const getNextPost = (currentPostId: string): IBlogPost | null => {
  const currentIndex = musicPosts.findIndex(post => post.id === currentPostId);
  
  if (currentIndex === -1 || currentIndex >= musicPosts.length - 1) {
    return null; // No next post (last post or not found)
  }
  
  return musicPosts[currentIndex + 1];
};

export const getAdjacentPosts = (currentPostId: string) => {
  return {
    previous: getPreviousPost(currentPostId),
    next: getNextPost(currentPostId)
  };
};


export const getMusicPostsByCategory = (category: string): IBlogPost[] => {
  return musicPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getBlogPost = async (slug: string): Promise<IBlogPost | null> => {
  const post = getMusicPostBySlug(slug);
  return post || null;
};
