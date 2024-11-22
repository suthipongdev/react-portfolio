import { data } from "../../contents/about"

const About = () => {
 return(
    <div className="space-y-4 px-2 scroll-m-14" id="About-section">
      <div className="text-primaryTitle font-semibold text-xl">{data.title}</div>
      <div>{data.description}</div>
    </div>
 )   
}

export default About