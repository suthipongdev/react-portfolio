import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
  { title: "About", sectionID: "About-section" },
  { title: "Experience", sectionID: "Experience-section" },
  { title: "Project", sectionID: "Project-section" },
  { title: "Article", sectionID: "Article-section" },
]

const Navbar = () => {
const [isMouseEnter,setIsMouseEnter] = useState({})

  const handleClick = (sectionID) => {
    document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="flex flex-col gap-3 font-semibold">
      {
        navs.map((e, i) => (
          <div key={`nav-${e}-${i}`} 
          onClick={() => handleClick(e.sectionID)}
          onMouseEnter={() => setIsMouseEnter({[e.title] : true})}
          onMouseLeave={() => setIsMouseEnter({[e.title] : false})}
          className="cursor-pointer flex"
          >
            <div><FontAwesomeIcon className={`mr-3 text-primarySubcontent ${ isMouseEnter[e.title]? "" : "hidden"}`} icon={faArrowRight}/></div>
            <div className={` ${ isMouseEnter[e.title]? "translate-x-1" : ""} duration-500` }> {e.title}</div>
          </div>
        ))
      }
    </div>
  );
};

export default Navbar;
