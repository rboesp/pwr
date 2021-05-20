import getPillData from "./pillData.js"

const projects = [
    {
        name: "Country Comparison Tool 🌎",
        desc: "Tool that shows the link between income and lifespan. Size of the bubbles is population.",
        urlBlurb: "Use it now!",
        url: "https://rboesp.github.io/Interactive-Visualization/",
        pills: getPillData(["Chart.js", "Node.js", "Express"]),
        src: "https://i.ibb.co/4WSwzwc/ezgif-com-gif-maker-1.gif",
    },
    {
        name: "Online Blackboard 🖊️",
        desc: "Draw and have fun by sharing a blackboard canvas with anyone in the world! (Use with 👨‍👨‍👧‍👧 for full effect 😃)",
        urlBlurb: "Draw now!",
        url: "https://rboesp.github.io/shared-blackboard/", //where to find project or source code
        pills: getPillData(["JavaScript", "Node.js", "Express"]),
        src: `https://i.ibb.co/x6BLnjx/blackboard.png`,
    },
    {
        name: "Online Pong 🏓",
        desc: "Play pong with people over the internet!",
        urlBlurb: "Play now!",
        url: "https://rboesp.github.io/Networking-Pong/",
        pills: getPillData(["Node.js", "Express"]),
        src: `https://i.ibb.co/KVX9Rhw/pong-gif2.gif`,
    },
    // {
    //     name: "Weather Station",
    //     desc: "Get the weather anythwere in the world!",
    //     urlBlurb: "Use it now!",
    //     url: "https://rboesp.github.io/weather-station/",
    //     pills: getPillData(["JavaScript"]),
    //     src: `https://i.ibb.co/DY4rpQc/image.png`,
    // },
]

export default function getProjects() {
    return projects
}
