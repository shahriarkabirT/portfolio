"use client";

import { useRouter } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  link: string;
}

interface BlogCardProps {
  post: BlogPost;
  isFeatured?: boolean;
}

export default function BlogCard({ post, isFeatured = false }: BlogCardProps) {
  const router = useRouter();

  if (isFeatured) {
    return (
      <div className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="h-64 md:h-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block bg-gray-100 dark:bg-white text-black px-4 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
              FEATURED POST
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] dark:text-white mb-4">
              {post.title}
            </h2>
            <p className="text-[var(--text-secondary)] dark:text-gray-300 mb-6 text-lg">
              {post.description}
            </p>
            <div className="flex items-center text-sm text-gray-400 mb-6">
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime}</span>
            </div>
            <button
              onClick={() => router.push(post.link)}
              className="bg-black text-white dark:bg-white dark:text-black px-8 py-3 rounded-lg font-semibold hover:opacity-95 transition-colors w-fit"
            >
              Read Full Article →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => router.push(post.link)}
      className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 dark:border-gray-800"
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 hidden dark:block"></div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-xs font-semibold">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-xs text-[var(--text-secondary)] dark:text-gray-400 mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)] dark:text-white line-clamp-2 hover:opacity-90 transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] dark:text-gray-400 mb-4 line-clamp-3">
          {post.description}
        </p>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-semibold text-[var(--text-primary)] dark:text-white flex items-center justify-between hover:opacity-90 transition-colors">
            <span>Read Article</span>
            <span>→</span>
          </p>
        </div>
      </div>
    </div>
  );
}
