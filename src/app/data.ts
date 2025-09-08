import { StaticImageData } from "next/image";

import {
  Duelists,
  UIToolsIcon,
  Leak1,
  MTC_Icon,
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
    BLOG: "News & Updates regarding my projects can be found in the blog section below.",
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
        "🔪 Duel against other players or friends!",
        "🪙 Earn gold to buy boxes, emotes, and more!",
        "📦 Unbox and collect items!",
        "🏆 Compete and grind the leaderboards for a spot on the top!",
      ],

      TECH_STACK: [
        "Roblox",
        "Game",
        "PVP",
        "Duels"
      ],

      IMAGE: Duelists,
      HIDDEN: false,
    },

     "UI Tools": {
      LIVE_PREVIEW: "https://create.roblox.com/store/asset/129313707373904/UI-Tools",
      DESCRIPTION: [
        "⚓ Anchor UI elements to any corner or side of the screen!",
        "⚖️ Scale UI elements to any size relative to the screen!"
      ],

      TECH_STACK: [
        "Roblox Studio",
        "Plugin",
        "Free",
      ],

      IMAGE: UIToolsIcon,
      HIDDEN: false,
    },

    "Thumbnail Creator": {
      LIVE_PREVIEW: "https://create.roblox.com/store/asset/13772812385/Instant-Model-Thumbnail",
      DESCRIPTION: [
        "📸 Instantly make model thumbnails",
        "🔒 Lock models in place for mess up free setup"
      ],

      TECH_STACK: [
        "Roblox Studio",
        "Plugin",
        "Free",
      ],

      IMAGE: UIToolsIcon,
      HIDDEN: false,
    },
  },

  BLOGS: {
     "Duelists Release Date": {
      DATE: "September 5, 2025",
      TIME: "1",
      LINK: "https://www.roblox.com/events/726934250443244053",
      IMAGE: Leak1,
      DESCRIPTION:
        "October, ??? 2025",
    },

    "Model Thumbnail Creator v1.2": {
      DATE: "September 8, 2025",
      TIME: "1",
      LINK: "https://devforum.roblox.com/t/plugin-model-thumbnail-creator/3924726",
      IMAGE: MTC_Icon,
      DESCRIPTION:
        "Model Thumbnail Creator v1.2 is out now! This update brings real time preview updates to the UI",
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
      "Github",
      "Visual Studio Code",
    ]
  },
};
