import placeholder from "./assets/Thumbnail.svg"
import gcakes from "./assets/thumbnails/gcakes.png"
import donut from "./assets/thumbnails/donuteating.gif"
import taboo from "./assets/thumbnails/taboo.jpg"

export const projectList = [
    {   
        title: "Project IRYS",
        img: placeholder,
        body: "A local hardware inventory management system that I have been developing during my free time. I mainly started this project thanks to family connections when I was made aware of a small hardware supply business' operational challenges. After making a brief visit with their office, I began understanding their workflow and requirements so I used this opportunity to build a system in mind with the possibility for them to adopt it that would solve challenges the business is currently facing.",
        tags: ["Ongoing", "React", "Tailwind", "Tauri"],
        url: "https://github.com/alain-cheng/Project-Irys",
    },
    {   
        title: "GCakes",
        img: gcakes,
        body: "A treat-themed web store for a local cake business developed as part of a software engineering course. I primarily focused on the development of UI components and pages, and the integration with our API endpoints",
        tags: ["Typescript", "Next.js", "Material UI", "Contentful"],
        url: "https://github.com/alain-cheng/gcakes-fe",
    },
    {   
        title: "Taboo",
        img: taboo,
        body: "Taboo features a very simple retro-style dungeon gameplay experience, developed using the Godot game engine and Android Studio, leveraging both Java and GDScript. I served as a frontend developer and asset designer on our team, focusing on the user interface. I also had a hand in scripting in-game mechanics such as dungeon trap behavior and projectiles. Additionally I contributed as a secondary artist, with my experience as a hobbyist illustrator.",
        tags: ["Android Studio", "Java", "Godot"],
        url: "https://github.com/alain-cheng/MOBDEVE-MP",
    },
    {   
        title: "Donut Eating Contest",
        img: donut,
        body: "A simple cookie-clicker-type game I made for a 3D modeling course. A demonstration of capability to work with 3D-based frameworks and tools with a basic understanding of fundamentals like lighting, camera, perspective, textures, and modeling.",
        tags: ["ThreeJS", "Blender"],
        url: "https://github.com/alain-cheng/Donut-Eating-Contest",
    },
];