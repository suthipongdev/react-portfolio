import { useState } from "react";
import FormattedDate from "../FormattedDate";
import Picture from "../Picture/Picture";
import Titlelink from "../Titlelink";
import Material from "../Material/Material";
import Descrition from "../Description/Description";
import Skill from "../Skill/Skill";

const ContentContainer =({
    title: sectionTitle = "" , 
    data = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const section_ID = `${sectionTitle}-section`

  return (
    <div id={section_ID} className="scroll-m-14">
      <div className="text-primaryTitle font-semibold text-xl px-2  ">{sectionTitle}</div>
      {
        data.map(({
          date = "",
          title = "",
          link =" ",
          materials = [],
          decriptions = [],
          Skills = [],
          picture = "" },
          index) => (
          <div
            key={`${section_ID}-${index}-${title}`}
            className={`grid grid-cols-[25%_75%] px-2 py-6 transition-all ${isMouseEnter[`${section_ID}-${index}`] ? " bg-gray-800 rounded-xl" : ""
              }`}
            onMouseEnter={() => setIsMouseEnter({ [`${section_ID}-${index}`]: true })}
            onMouseLeave={() => setIsMouseEnter({ [`${section_ID}-${index}`]: false })}
          >
            <div>
              <FormattedDate isHighLight={isMouseEnter[`${section_ID}-${index}`]}>{date} </FormattedDate>
              <Picture pic1={picture} title={title} />
            </div>
            <div className="grid gap-4 ">
              <Titlelink isHighLight={isMouseEnter[`${section_ID}-${index}`]} title={title} link={link} />
              {
                materials.length > 0 ? 
                <div className="flex gap-4 text-xl items-center">
                {
                  materials.map((e, i) => (
                    <Material key={`${e}-material-${i}`} icon={e.type} link={e.link} />
                  ))
                }
              </div>
                :null
              }
             {
              decriptions.map((e,i) => (
                <Descrition key={`${e}-decriptions-${i}`} descrition = {e} />
              ))
             }
              <div>
                {
                  Skills.map((e, i) => (
                    <Skill key={`${e}-key-${i}`} data={e} />
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }

    </div>
  );
}

export default ContentContainer