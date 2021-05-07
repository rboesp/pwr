import getPillData from "./pillData"

function rand() {
    return Math.floor(Math.random() * (1025 - 1000 + 1)) + 1000
}

const projects = [
    {
        name: "Online Whiteboard",
        img: "", //or gif
        desc: "Share a whiteboard with someone over the internet!",
        urlBlurb: "Play online now!",
        url: "", //where to find project or source code
        pills: getPillData(["React", "Node.js", "Express"]),
        src: `https://picsum.photos/id/${rand()}/200/200`,
    },
    {
        name: "Country Comparison Tool",
        img: "", //or gif
        desc: "Tool that shows the link between income and lifespan. Size of the bubbles is population.",
        urlBlurb: "Use it now!",
        url: "https://rboesp.github.io/Interactive-Visualization/",
        pills: getPillData(["Chart.js", "Node.js", "Express"]),
        src: "https://i.ibb.co/WKZ6qfv/ezgif-com-gif-maker.gif",
    },
    {
        name: "Network Pong",
        img: "", //or gif
        desc: "Play pong over the internet!",
        urlBlurb: "Use it now!",
        url: "https://networking-pong.herokuapp.com/",
        pills: getPillData(["Node.js", "Express"]),
        src: `https://picsum.photos/id/${rand()}/200/200`,
    },
]

export default function getProjects() {
    return projects
}
