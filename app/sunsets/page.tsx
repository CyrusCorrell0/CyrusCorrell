"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { sunsetPosts } from "./data";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Get all dates that have posts
const getPostDates = () => {
  return new Set(sunsetPosts.map(post => {
    const date = post.date;
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }));
};

// Mini Calendar Component
function MiniCalendar() {
  const today = new Date();
  const [displayDate, setDisplayDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const postDates = getPostDates();
  
  const displayMonth = displayDate.getMonth();
  const displayYear = displayDate.getFullYear();
  
  // Get first day of month and number of days
  const firstDay = new Date(displayYear, displayMonth, 1).getDay();
  const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
  
  // Navigate to previous month
  const goToPreviousMonth = () => {
    setDisplayDate(new Date(displayYear, displayMonth - 1, 1));
  };
  
  // Navigate to next month
  const goToNextMonth = () => {
    setDisplayDate(new Date(displayYear, displayMonth + 1, 1));
  };
  
  // Check if a date has a post
  const hasPost = (day: number) => {
    const date = new Date(displayYear, displayMonth, day);
    const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    return postDates.has(dateKey);
  };
  
  // Check if a date is today
  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      displayMonth === today.getMonth() &&
      displayYear === today.getFullYear()
    );
  };
  
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  return (
    <div className="bg-background/50 border border-foreground/20 rounded-lg p-4 w-fit">
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={goToPreviousMonth}
          className="p-1 hover:bg-foreground/10 rounded transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="text-center font-semibold text-sm">
          {monthNames[displayMonth]} {displayYear}
        </div>
        <button
          onClick={goToNextMonth}
          className="p-1 hover:bg-foreground/10 rounded transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs">
        {weekDays.map(day => (
          <div key={day} className="text-center text-foreground/60 font-medium pb-1">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="w-8 h-8" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const hasPostDay = hasPost(day);
          const isTodayDay = isToday(day);
          
          return (
            <div
              key={day}
              className={`
                w-8 h-8 rounded flex items-center justify-center text-xs font-medium
                ${isTodayDay 
                  ? "bg-yellow-500 text-foreground" 
                  : hasPostDay 
                    ? "bg-orange-500 text-white" 
                    : "bg-foreground/10 text-foreground/40"
                }
              `}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Blog Post Component
function SunsetPost({ post }: { post: typeof sunsetPosts[0] }) {
  return (
    <article className="border-b border-foreground/10 pb-8 mb-8 last:border-b-0 last:mb-0">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="md:w-2/3 flex flex-col justify-center">
          <div className="mb-2">
            <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
            <p className="text-foreground/60 italic">{post.location}</p>
          </div>
          <p className="text-foreground/80 leading-relaxed">{post.description}</p>
          <p className="text-sm text-foreground/40 mt-2 mb-4">
            {post.date.toLocaleDateString("en-US", { 
              year: "numeric", 
              month: "long", 
              day: "numeric" 
            })}
          </p>
          <Link
            href={`/sunsets/${post.id}`}
            className="inline-block w-fit px-6 py-2 rounded-full border border-foreground/30 hover:border-foreground transition-colors text-sm italic hover:bg-foreground/5"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function SunsetsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
        {/* Header with H1 and Calendar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-normal">Sunset Journal</h1>
          <MiniCalendar />
        </div>
        
        {/* Blog Feed */}
        <div className="mt-12">
          {sunsetPosts.map(post => (
            <SunsetPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

