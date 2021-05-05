import  getPillData  from "./pillData";
import stacks from './techStacks'


const projects =  [
    {
        name: 'Online Whiteboard',
        img: '', //or gif
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        urlBlurb: 'Play online now!',
        url: '', //where to find project or source code
        pills: getPillData(['React', 'Node.js', 'Express'])
    },
    {
        name: 'Country Comparison Tool',
        img: '', //or gif
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        urlBlurb: 'Use it now!',
        url: 'https://rboesp.github.io/Interactive-Visualization/',
        pills: getPillData(['Chart.js', 'Node.js', 'Express'])
    },
    {
        name: 'Network Pong',
        img: '', //or gif
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        urlBlurb: 'Use it now!',
        url: 'https://networking-pong.herokuapp.com/',
        pills: getPillData(['Node.js', 'Express'])
    },
]


export default function getProjects() {
    return projects
}