import React from 'react';
import { Heart, MapPin, Star } from 'lucide-react';

interface Story {
  text: string;
  imageId: string;
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
		  { text: "Rick a boy", imageId: "images/CoupleJourney/chapter1_1.jpg" },
		  { text: "Laura a girl", imageId: "images/CoupleJourney/chapter1_2.jpg" },
          { text: "They first met in school, both pursuing their diploma courses.", imageId: "images/CoupleJourney/chapter1_3.jpg" },
          { text: "At that time, there were no feelings, no sparks of love.", imageId: "images/CoupleJourney/chapter1_4.jpg" },
          { text: "Just two students searching for the right path in life.", imageId: "images/CoupleJourney/chapter1_5.jpg" },
          { text: "They talked often, about careers, about the future.", imageId: "images/CoupleJourney/chapter1_6.jpg" },
          { text: "Slowly, their friendship grew.", imageId: "images/CoupleJourney/chapter1_7.jpg" }
        ],
        bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
        textColor: "text-blue-900"
      },
      {
        title: "Growing Closer",
        stories: [
          { text: "They hung out, shared laughter, and got to know each other more deeply.", imageId: "images/CoupleJourney/chapter1_9.jpg" },
          { text: "He met her family, and became part of her circle of friends.", imageId: "images/CoupleJourney/chapter1_11.jpg" },
          { text: "The more they talked, the more they realized… something was different.", imageId: "images/CoupleJourney/chapter1_12.png" },
          { text: "He liked her.", imageId: "images/CoupleJourney/chapter1_14.JPG" },
		  { text: "She liked him.", imageId: "images/CoupleJourney/chapter1_13.jpg" }
        ],
        bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
        textColor: "text-purple-900"
      },
      {
        title: "The Beginning",
        stories: [
          { text: "But they both knew — it wasn't the right time yet.", imageId: "images/CoupleJourney/chapter1_20.jpg" },
          { text: "So they remained friends.", imageId: "images/CoupleJourney/chapter1_8.jpg" },
          { text: "Studying, relaxing, growing together.", imageId: "images/CoupleJourney/chapter1_21.jpg" },
          { text: "Until one day… he couldn't hold it in any longer.", imageId: "images/CoupleJourney/chapter1_25.jpg" },
          { text: "With a puzzle gift hiding three simple words, he confessed his love.", imageId: "images/CoupleJourney/chapter1_27.jpg" },
          { text: "After waiting and trying… she finally said it back.", imageId: "images/CoupleJourney/chapter1_26.JPG" },
          { text: "That was the beginning.", imageId: "images/CoupleJourney/chapter1_15.jpg" }
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
          { text: "Their first year as a couple wasn't always easy.", imageId: "images/CoupleJourney/chapter2_2.jpg" },
          { text: "At the start, they clashed, misunderstood, and disagreed on many things.", imageId: "images/CoupleJourney/chapter2_3.jpg" },
          { text: "But with patience and care, they learned to listen.", imageId: "images/CoupleJourney/chapter2_1.jpg" },
          { text: "They learned to respect, and to truly understand each other.", imageId: "images/CoupleJourney/chapter2_10.jpg" },
          { text: "Love slowly deepened.", imageId: "images/CoupleJourney/chapter2_9.jpg" }
        ],
        bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
        textColor: "text-green-900"
      },
      {
        title: "The Distance Challenge",
        stories: [
          { text: "Then life took a turn.", imageId: "images/CoupleJourney/chapter2_4.jpg" },
          { text: "He had to move to Thailand, while she remained in Singapore.", imageId: "images/CoupleJourney/chapter2_6.jpg" },
          { text: "Distance became their biggest test.", imageId: "images/CoupleJourney/chapter2_7.jpg" },
          { text: "But they didn't give up.", imageId: "images/CoupleJourney/chapter2_8.jpg" },
          { text: "They called every day, sharing stories, struggles, and smiles across the screen.", imageId: "images/CoupleJourney/chapter2_13.PNG" },
          { text: "They made memories from afar — photos, late-night talks, even watching movies together.", imageId: "images/CoupleJourney/chapter2_30.JPG" }
        ],
        bgColor: "bg-gradient-to-br from-orange-50 to-amber-100",
        textColor: "text-orange-900"
      },
      {
        title: "Reunion in Krabi",
        stories: [
          { text: "And when they finally met again in Krabi, Thailand…", imageId: "images/CoupleJourney/chapter2_19.jpg" },
          { text: "Their happiness was undeniable.", imageId: "images/CoupleJourney/chapter2_14.jpg" },
          { text: "Every moment together became precious.", imageId: "images/CoupleJourney/chapter2_26.jpg" }
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
          { text: "Now, in their second year, life has become more challenging.", imageId: "images/CoupleJourney/chapter2_27.jpg" },
          { text: "Finding jobs, building careers, surviving the present — it isn't easy.", imageId: "images/CoupleJourney/chapter3_10.JPG" },
          { text: "The distance weighs heavy, but they push forward.", imageId: "images/CoupleJourney/chapter3_9.jpg" },
          { text: "They motivate each other, give advice, and keep moving.", imageId: "images/CoupleJourney/chapter3_2.JPG" },
          { text: "They remind each other of the dream they share.", imageId: "images/CoupleJourney/chapter3_1.jpg" }
        ],
        bgColor: "bg-gradient-to-br from-violet-50 to-purple-100",
        textColor: "text-violet-900"
      },
      {
        title: "A Promise in Bangkok",
        stories: [
          { text: "After a year, they met again in Bangkok, where they made a promise.", imageId: "images/CoupleJourney/chapter3_4.jpg" },
          { text: "One day, they will live and work side by side.", imageId: "images/CoupleJourney/chapter3_12.jpg" },
          { text: "As professionals, as partners in life.", imageId: "images/CoupleJourney/chapter3_11.JPG" },
          { text: "But for now, they endure.", imageId: "images/CoupleJourney/chapter3_6.jpg" },
          { text: "They work hard.", imageId: "images/CoupleJourney/chapter3_7.jpg" },
          { text: "They hold on to their love.", imageId: "images/CoupleJourney/chapter3_8.jpg" }
        ],
        bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
        textColor: "text-pink-900"
      }
    ]
  }
};