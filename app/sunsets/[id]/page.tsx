"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { sunsetPosts } from "../data";
import { use } from "react";

export default function SunsetPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const postId = parseInt(id);
  const post = sunsetPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="pt-24 px-8 pb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl font-normal mb-4">Post Not Found</h1>
          <Link
            href="/sunsets"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors text-sm italic"
          >
            ← Back to Sunset Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-24 px-8 pb-16 max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/sunsets"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8 text-sm italic"
        >
          ← Back to Sunset Journal
        </Link>

        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-normal mb-3">{post.title}</h1>
          <p className="text-xl text-foreground/60 italic mb-4">{post.location}</p>
          <p className="text-sm text-foreground/40">
            {post.date.toLocaleDateString("en-US", { 
              year: "numeric", 
              month: "long", 
              day: "numeric" 
            })}
          </p>
        </div>

        {/* Post Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Full Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-foreground/80 leading-relaxed whitespace-pre-line text-lg">
            {post.fullContent}
          </div>
        </div>
      </div>
    </div>
  );
}

