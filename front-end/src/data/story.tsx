import React from 'react';
import { Heart, MapPin, Star } from 'lucide-react';

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

interface StoryData {
  chapter1: Chapter;
  chapter2: Chapter;
  chapter3: Chapter;
}

// Story data with individual lines
export const storyData: StoryData = {
  chapter1: {
    title: "When Two Paths Crossed",
    icon: <Star className="w-8 h-8" />,
    sections: [
      {
        title: "A Boy Named Rick, A Girl Named Laura",
        stories: [
          { text: "They first met in school, both pursuing their diploma courses.", imageId: 1 },
          { text: "At that time, there were no feelings, no sparks of love.", imageId: 2 },
          { text: "Just two students searching for the right path in life.", imageId: 3 },
          { text: "They talked often, about careers, about the future.", imageId: 4 },
          { text: "Slowly, their friendship grew.", imageId: 5 }
        ],
        bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
        textColor: "text-blue-900"
      },
      {
        title: "Growing Closer",
        stories: [
          { text: "They hung out, shared laughter, and got to know each other more deeply.", imageId: 6 },
          { text: "He met her family, and became part of her circle of friends.", imageId: 7 },
          { text: "The more they talked, the more they realized… something was different.", imageId: 8 },
          { text: "He liked her. She liked him.", imageId: 9 }
        ],
        bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
        textColor: "text-purple-900"
      },
      {
        title: "The Beginning",
        stories: [
          { text: "But they both knew — it wasn't the right time yet.", imageId: 10 },
          { text: "So they remained friends.", imageId: 11 },
          { text: "Studying, relaxing, growing together.", imageId: 12 },
          { text: "Until one day… he couldn't hold it in any longer.", imageId: 13 },
          { text: "With a puzzle gift hiding three simple words, he confessed his love.", imageId: 14 },
          { text: "After waiting and trying… she finally said it back.", imageId: 15 },
          { text: "That was the beginning.", imageId: 16 }
        ],
        bgColor: "bg-gradient-to-br from-rose-50 to-red-100",
        textColor: "text-red-900"
      }
    ]
  },
  chapter2: {
    title: "Love, Tested by Distance",
    icon: <MapPin className="w-8 h-8" />,
    sections: [
      {
        title: "Learning to Love",
        stories: [
          { text: "Their first year as a couple wasn't always easy.", imageId: 17 },
          { text: "At the start, they clashed, misunderstood, and disagreed on many things.", imageId: 18 },
          { text: "But with patience and care, they learned to listen.", imageId: 19 },
          { text: "They learned to respect, and to truly understand each other.", imageId: 20 },
          { text: "Love slowly deepened.", imageId: 21 }
        ],
        bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
        textColor: "text-green-900"
      },
      {
        title: "The Distance Challenge",
        stories: [
          { text: "Then life took a turn.", imageId: 22 },
          { text: "He had to move to Thailand, while she remained in Singapore.", imageId: 23 },
          { text: "Distance became their biggest test.", imageId: 24 },
          { text: "But they didn't give up.", imageId: 25 },
          { text: "They called every day, sharing stories, struggles, and smiles across the screen.", imageId: 26 },
          { text: "They made memories from afar — photos, late-night talks, even watching movies together.", imageId: 27 }
        ],
        bgColor: "bg-gradient-to-br from-orange-50 to-amber-100",
        textColor: "text-orange-900"
      },
      {
        title: "Reunion in Krabi",
        stories: [
          { text: "And when they finally met again in Krabi, Thailand…", imageId: 28 },
          { text: "Their happiness was undeniable.", imageId: 29 },
          { text: "Every moment together became precious.", imageId: 30 }
        ],
        bgColor: "bg-gradient-to-br from-teal-50 to-cyan-100",
        textColor: "text-teal-900"
      }
    ]
  },
  chapter3: {
    title: "Dreams for Tomorrow",
    icon: <Heart className="w-8 h-8" />,
    sections: [
      {
        title: "Present Challenges",
        stories: [
          { text: "Now, in their second year, life has become more challenging.", imageId: 31 },
          { text: "Finding jobs, building careers, surviving the present — it isn't easy.", imageId: 32 },
          { text: "The distance weighs heavy, but they push forward.", imageId: 33 },
          { text: "They motivate each other, give advice, and keep moving.", imageId: 34 },
          { text: "They remind each other of the dream they share.", imageId: 35 }
        ],
        bgColor: "bg-gradient-to-br from-violet-50 to-purple-100",
        textColor: "text-violet-900"
      },
      {
        title: "A Promise in Bangkok",
        stories: [
          { text: "They met again in Bangkok, where they made a promise.", imageId: 36 },
          { text: "One day, they will live and work side by side.", imageId: 37 },
          { text: "As professionals, as partners in life.", imageId: 38 },
          { text: "But for now, they endure.", imageId: 39 },
          { text: "They work hard.", imageId: 40 },
          { text: "They hold on to their love.", imageId: 41 }
        ],
        bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
        textColor: "text-pink-900"
      }
    ]
  }
};