export type GalleryItem = {
  title: string;
  images: string[];
  description: string;
};

export const GALLERIES: Record<string, GalleryItem> = {
  karate: {
    title: "Karate Classes & Student Achievements",
    images: [
      "https://res.cloudinary.com/udm8np99/image/upload/v1790153869/ChatGPT_Image_Sep_23_2026_02_13_01_PM.png",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790153864/ChatGPT_Image_Sep_23_2026_02_22_09_PM.png",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790153862/ChatGPT_Image_Sep_23_2026_02_16_21_PM.png",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790153860/karate.png",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790153846/ChatGPT_Image_Sep_23_2026_02_18_56_PM.png",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790153844/wisdom-school-event-05_1.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790153833/wisdom-school-event-07_1.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790153838/wisdom-school-event-08_1.jpg",
    ],
    description:
      "Our Karate programme empowers students with strength, discipline, confidence, courage, and essential self-defence skills. Through regular training, students learn to stay focused, face challenges with confidence, and protect themselves when needed. Special emphasis on self-defence for girls helps build awareness, confidence, and personal safety. Our students proudly showcase their dedication through competitions, performances, and outstanding achievements.",
  },
  "school-gallery-2015": {
    title: "Memories from 2015 (Memories of Our Past Batches)",
    images: [
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186395/IMG_9293_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186391/IMG_9306_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186390/IMG_9295_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186387/IMG_9292_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186385/IMG_9303_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186376/school_gallery_05.jpg",
    ],
    description:
      "Every photograph holds a story, and every past batch holds a special place in our hearts. From innocent smiles and childhood friendships to dreams that grew into successful journeys, these memories take us back to the beautiful days that shaped our students. Our past students carry with them the knowledge, values, confidence, and strong foundation they received here. Today, as they continue to achieve success in different walks of life, their journeys remain a source of pride and inspiration for our school. These memories are not just photographs—they are a cherished part of our school's legacy.",
  },
  "annual-day": {
    title: "Annual Day Celebrations",
    images: [
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186053/school_gallery_01.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186053/school_gallery_02.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186056/IMG_9310_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186056/school_gallery_04.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186481/IMG_9304_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186059/IMG_9305_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790412009/anuall5.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790412007/anul7.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790412007/anual6.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790410880/fath.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790410842/anull.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790413830/anual89.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790413832/anualday8.jpg",
    ],
    description:
      "A celebration of talent, creativity, and achievement, where our students take the stage with confidence and joy. From inspiring performances to proud moments of recognition, Annual Day brings together students, teachers, and families to celebrate the spirit and success of our school community.",
  },
  nursery: {
    title: "Little Beginnings, Big Dreams",
    images: [
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186603/IMG_9301_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186598/IMG_9299_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186595/IMG_9297_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186593/IMG_9300_website.jpg",
    ],
    description:
      "Every beautiful journey begins with a small step. Our nursery years are filled with innocent smiles, joyful learning, first friendships, and countless precious moments. These little memories capture the beginning of our students' journeys, where curiosity is nurtured, confidence begins to grow, and dreams take their first flight.",
  },
  prayer: {
    title: "Moments of Prayer & Gratitude",
    images: [
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186715/IMG_9294_website.jpg",
      "https://res.cloudinary.com/udm8np99/image/upload/v1790186713/school_gallery_03.jpg",
    ],
    description:
      "A peaceful beginning to every day, where young hearts come together with faith, gratitude, and hope. These moments of prayer nurture values, inner strength, respect, and togetherness, reminding our students that a strong character is the foundation of a meaningful life.",
  },
  teachersday: {
    title: "Teachers Day Celebration",
    images:
      ["https://res.cloudinary.com/udm8np99/image/upload/v1790411522/3teach.jpg",
        "https://res.cloudinary.com/udm8np99/image/upload/v1790411523/teach1.jpg",
        "https://res.cloudinary.com/udm8np99/image/upload/v1790411523/teacher.jpg",
        "https://res.cloudinary.com/udm8np99/image/upload/v1790413871/award.jpg",
        "https://res.cloudinary.com/udm8np99/image/upload/v1790413867/awrd1.jpg",
      ],
    description: "A special celebration dedicated to our wonderful teachers, honoring their dedication, guidance, and invaluable contribution to shaping the future of our students. The day was filled with gratitude, appreciation, and memorable moments shared by students and teachers."


  }
};

export default GALLERIES;
