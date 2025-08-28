import React from 'react';
import { storyData } from '@/data/story';
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';

// Type definitions
interface Story {
  text: string;
  imageId: number;
}

interface Section {
  title: string;
  stories: Story[];
  bgColor: string;
  textColor: string;
}

interface Chapter {
  title: string;
  icon: React.ReactNode;
  sections: Section[];
}

// Component props interfaces
interface StoryItemProps {
  story: Story;
  textColor: string;
  isEven: boolean;
}

interface StorySectionProps {
  section: Section;
}

interface ChapterProps {
  chapter: Chapter;
  chapterNumber: number;
}

// Story Item Component - pairs each line with an image
const StoryItem: React.FC<StoryItemProps> = ({ story, textColor, isEven }) => {
  return (
    <div className={`flex items-center gap-8 mb-12 ${isEven ? 'flex-row-reverse' : 'flex-row'} max-lg:flex-col max-lg:text-center`}>
      {/* Image */}
      <div className="flex-shrink-0">
        <div className="w-80 h-60 rounded-2xl shadow-lg bg-white/50 border-4 border-white/80 flex items-center justify-center overflow-hidden">
          {/* Replace this div with your actual image */}
          <div className={`${textColor} text-center p-4`}>
            <div className="text-4xl mb-2">📷</div>
            <div className="text-sm opacity-75">Photo {story.imageId}</div>
            <div className="text-xs mt-1 opacity-60">Replace with actual image</div>
          </div>
          {/* When you have actual images, use this instead:
          <img 
            src={`your-image-path-${story.imageId}.jpg`} 
            alt={`Story moment ${story.imageId}`}
            className="w-full h-full object-cover"
          />
          */}
        </div>
      </div>
      
      {/* Text */}
      <div className="flex-1">
        <p className={`text-5xl leading-relaxed ${textColor} `}>
          {story.text}
        </p>
      </div>
    </div>
  );
};

// Section Component
const StorySection: React.FC<StorySectionProps> = ({ section }) => {
  return (
    <section className={`${section.bgColor} py-16 px-6`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h3 className={`text-5xl font-bold ${section.textColor}`}>
            {section.title}
          </h3>
          <div className={`w-24 h-1 ${section.textColor.replace('text', 'bg')} mx-auto mt-4 opacity-60`}></div>
        </div>
        
        {/* Story Items */}
        <div className="space-y-8">
          {section.stories.map((story: Story, index: number) => (
            <StoryItem 
              key={index} 
              story={story} 
              textColor={section.textColor} 
              isEven={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Chapter Component
const Chapter: React.FC<ChapterProps> = ({ chapter, chapterNumber }) => {
  return (
    <div >
      {/* Chapter Header */}
      <div className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full">
              {chapter.icon}
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Chapter {chapterNumber}
          </h2>
          <h3 className="text-4xl font-light opacity-90">
            {chapter.title}
          </h3>
          <div className="w-32 h-1 bg-white/30 mx-auto mt-6"></div>
        </div>
      </div>
      
      {/* Chapter Sections */}
      {chapter.sections.map((section: Section, index: number) => (
        <StorySection key={index} section={section} />
      ))}
    </div>
  );
};

// Main App Component
export const LoveStoryWebsite: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Header />

      {/* Story Chapters */}
      <main>
        <Chapter chapter={storyData.chapter1} chapterNumber={1} />
        <Chapter chapter={storyData.chapter2} chapterNumber={2} />
        <Chapter chapter={storyData.chapter3} chapterNumber={3} />
      </main>

      {/* Footer */}
	  <Footer />
    </div>
  );
};
