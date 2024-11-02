import placeholder from "./assets/Thumbnail.svg"
import gcakes from "./assets/thumbnails/gcakes.png"
import donut from "./assets/thumbnails/donuteating.png"
import taboo from "./assets/thumbnails/taboo.jpg"

export const projectList = [
    {   
        title: "Thesis: Improving Stegastamp's Detection of Hidden Messages in Images",
        img: placeholder,
        body: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
        tags: ["Python", "Tensorflow 1.13"],
        url: "https://github.com/alain-cheng/THESIS",
    },
    {   
        title: "GCakes",
        img: gcakes,
        body: "A tasty themed website for a local cake business developed as part of our software engineering course. I primarily focused on the frontend while contributing to some of the backend aspects in collaboration with my team as a full stack developer.",
        tags: ["Typescript", "Next.js", "Material UI", "Contentful"],
        url: "https://github.com/alain-cheng/gcakes-fe",
    },
    {   
        title: "Donut Eating Contest",
        img: donut,
        body: "A fun simple cookie-clicker-type game I made for a 3D modeling course. Made to serve as a display of capacity to work with 3D-based frameworks and tools with a basic understanding of fundamentals such as lighting, camera, perspective, textures, and modeling.",
        tags: ["ThreeJS", "Blender"],
        url: "https://github.com/alain-cheng/Donut-Eating-Contest",
    },
    {   
        title: "Taboo",
        img: taboo,
        body: "A mobile game our team developed for our mobile development course. Taboo features a very simple retro-style dungeon gameplay experience, developed using the Godot game engine and Android Studio, leveraging both Java and GDScript. I served as a frontend developer and designer, focusing on the user interface and scripting game mechanics and physics. Additionally I contributed as a secondary artist, using my experience as a self-taught illustrator with Clip Studio Paint.",
        tags: ["Android Studio", "Java", "Godot", "GDScript"],
        url: "https://github.com/alain-cheng/MOBDEVE-MP",
    },
];