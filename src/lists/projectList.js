import placeholder from "../assets/Thumbnail.svg"
import gcakes from "../assets/thumbnails/gcakes.png"
import donut from "../assets/thumbnails/donuteating.gif"
import taboo from "../assets/thumbnails/taboo.jpg"
import { TAG_TYPES } from "../constants/TAG_TYPES";

export const projectList = [
    {   
        title: "Project IRYS",
        img: placeholder,
        body: "A local hardware inventory management system that I have been developing during my free time. I mainly started this project when I was made aware of a small hardware supply business' operational challenges. I began understanding their workflow and requirements so I used this opportunity to build a system in mind with the possibility for them to adopt it.",
        tags: [
            {text: "Ongoing", type: TAG_TYPES.STATUS}, 
            {text: "JavaScript", type: TAG_TYPES.LANGUAGE },
            {text: "React", type: TAG_TYPES.FRAMEWORK }, 
            {text: "Tailwind", type: TAG_TYPES.FRAMEWORK }, 
            {text: "Tauri", type: TAG_TYPES.FRAMEWORK },
        ],
        url: "https://github.com/alain-cheng/Project-Irys",
    },
    {   
        title: "GCakes",
        img: gcakes,
        body: "A treat-themed web store for a local cake business developed as part of a software engineering course. I primarily focused on the development of UI components and pages, and the integration with our API endpoints",
        tags: [
            {text: "TypeScript", type: TAG_TYPES.LANGUAGE }, 
            {text: "Next.js", type: TAG_TYPES.FRAMEWORK }, 
            {text: "Material UI", type: TAG_TYPES.LIBRARY }, 
            {text: "Contentful", type: TAG_TYPES.TOOL },
        ],
        url: "https://github.com/alain-cheng/gcakes-fe",
    },
    {   
        title: "Taboo",
        img: taboo,
        body: "Taboo features a very simple retro-style dungeon gameplay experience, developed using the Godot game engine and Android Studio, leveraging both Java and GDScript. I served as a frontend developer and asset designer on our team, focusing on the user interface. I also had a hand in scripting in-game mechanics such as dungeon trap behavior and projectiles. Additionally I contributed as a secondary artist, with my experience as a hobbyist illustrator.",
        tags: [
            {text: "Android Studio", type: TAG_TYPES.TOOL }, 
            {text: "Java", type: TAG_TYPES.LANGUAGE }, 
            {text: "Godot", type: TAG_TYPES.TOOL },
        ],
        url: "https://github.com/alain-cheng/MOBDEVE-MP",
    },
    {   
        title: "Donut Eating Contest",
        img: donut,
        body: "A simple cookie-clicker-type game I made for a 3D modeling course. A demonstration of capability to work with 3D-based frameworks and tools with a basic understanding of fundamentals like lighting, camera, perspective, textures, and modeling.",
        tags: [
            {text: "ThreeJS", type: TAG_TYPES.FRAMEWORK }, 
            {text: "Blender", type: TAG_TYPES.TOOL },
        ],
        url: "https://github.com/alain-cheng/Donut-Eating-Contest",
    },
];