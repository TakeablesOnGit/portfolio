import { StaticImageData } from "next/image";

import {
  AirwatchImage,
  LibraryImage,
  SkygazeImage,
  TodoImage,
  Duelists,
} from "@/assets";

export interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
  HIDDEN: boolean;
}

export const DATA = {
  HEADER: {
    NAME: "Takeables",
    AGE: "21",
    PRONOUN: "He/Him",
    HEADLINE:
      "Full-Stack Roblox Developer | Game Development Enthusiast",
    ROBLOX:
     "https://www.roblox.com/users/4273611457/profile",
    GITHUB: "https://github.com/TakeablesOnGit",
  },

  ABOUT_ME: {
    INTRO:
      "I'm a full-stack ROBLOX developer. I have been on the ROBLOX platform for over 9 years, and have developed a strong passion for creating immersive gaming experiences. I love making someone's ideas come to life through code and design.",
    EXPERTISE:
      "My expertise is more prominent in programing (luau) and UI Design. I create clean code that is easy to read and maintain, and I am always looking for ways to improve my skills and knowledge. I am also experienced in building, 3D modeling, texturing, VFX, and sound design.",
    BLOG: "I would love publishing blogs and sharing insights on web development, best practices, and new technologies.",
  },

  EXPERIENCE: {
    "Programer": {
      WEBSITE: "https://www.roblox.com/users/4273611457/profile",
      POSITION: "Programer/Coder/Scripter",
      LOCATION: "At Home",
      DURATION: "Sep 2016 - Present",
      DESCRIPTION: [
        "Nearly 10 years of experience with coding on ROBLOX.",
        "Able to create complex systems and mechanics using luau while maintaining readable  & reuseable code.",
        "Able to code with performance & optimization.",
        "If you can think it, I can probably code it.",
      ],
      TECH_STACK: [
        "Luau (lua)",
        "Roblox Studio",
      ],
    },

    "UI Designer": {
      WEBSITE: "https://www.roblox.com/users/4273611457/profile",
      POSITION: "UI/UX Designer",
      LOCATION: "At Home",
      DURATION: "Sep 2016 - Present",
      DESCRIPTION: [
        "Nearly 10 years of experience with UI Design on ROBLOX.",
        "Understands the importance of user experience and how to create interfaces that are both visually appealing and easy to use.",
        "Able to create custom UI elements using Roblox Studio and third-party tools like Figma and Paint.net.",
        "Able to create UI that is responsive and works well on different screen sizes and devices.",
        "Able to create UI that is consistent with the overall theme and style of the game.",
      ],
      TECH_STACK: [
        "Roblox Studio",
        "Paint.net",
      ],
    },
  },

  PROJECTS: {
    "Duelists": {
      LIVE_PREVIEW: "https://www.roblox.com/games/132732390709362",
      DESCRIPTION: [
        "Desciption Text 1",
        "Desciption Text 2",
        "Desciption Text 3",
      ],

      TECH_STACK: [
        "Scripting",
        "UI Design",
        "Icon Art",
      ],

      IMAGE: Duelists,
      HIDDEN: false,
    },
  },

  BLOGS: {
    "Duelists Release Date": {
      DATE: "August 12, 2025",
      TIME: "1",
      LINK: "https://x.com/Takeables/status/1948715600055796008",
      DESCRIPTION:
        "Duelists will be releasing on September 14th, 2025.",
    },
  },

  SKILLS: {
    Languages: [
      "Luau (Lua)",
    ],

     Skills: [
      "Programing/Coding/Scripting",
      "UI/UX Design",
      "3D Modeling",
      "Texturing",
      "Building",
      "GFX (Icons & Thumbnails)",
    ],

    Tools: [
      "Roblox Studio",
      "Blender",
      "Paint.net",
      "Figma",
      "Visual Studio Code",
    ]
  },
};
