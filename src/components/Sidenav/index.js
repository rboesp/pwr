import React /*, { useRef }*/ from "react"
import SideOption from "../SideOption/"
import SideIcon from "../SideIcon"

const nav_options = {
    icon_size: 35,
    nav_routes: [{ name: `Bio`, url: "/" }, { name: `Projects`, url: "/projects" }, { name: `Resume` }],
    social_icons: [
        {
            href: "https://linkedin.com/in/robertboespflug",
            src: "https://img.icons8.com/color/100/000000/linkedin.png",
        },
        {
            href: "https://github.com/rboesp",
            src: "https://img.icons8.com/nolan/100/github.png",
        },
    ],
}

function Blurb({ text }) {
    return (
        <h6 style={{ fontFamily: "rubik" }} className="p-0 text-center white mb-0">
            {text}
        </h6>
    )
}

export default function Sidenav(props) {
    // const divRef = useRef(null)
    return (
        <div className="bg-dark sidenav-border sidenav-height ">
            <div className=" full-height d-flex flex-column justify-content-between">
                <div className=" full-width p-2 d-flex flex-column">
                    <h1 style={{ fontFamily: "rubik" }} className="p-0 text-center white mb-0">
                        Robert Boespflug
                    </h1>
                    {/* <h1 className="p-1 text-center white">Boespflug</h1> */}
                    <Blurb text="Software Developer" />
                    <Blurb text="Seattle, WA" />
                </div>
                <div id="basic-navbar-nav">
                    {nav_options.nav_routes.map((option, i) => {
                        return (
                            <div
                                // onClick={() => {
                                //     console.log("hello" + Math.random())
                                //     divRef.current.focus()
                                // }}
                                // ref={divRef}
                                // onFocus={(e) => (e.target.style.backgroundColor = "red")}
                                // tabIndex={i}
                                className=""
                                key={option.name}
                            >
                                <SideOption
                                    name={option.name}
                                    url={option.url}
                                    // iconUrl={option.value}
                                    // key={option.name}
                                ></SideOption>
                            </div>
                        )
                    })}
                </div>
                <div className=" d-flex justify-content-center mt-1">
                    {nav_options.social_icons.map((icon) => (
                        <SideIcon key={icon.href} href={icon.href} src={icon.src} />
                    ))}
                </div>
            </div>
        </div>
    )
}
