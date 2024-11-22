import ContentContainer from "../../components/ContentContainer"
import { data as experience } from "../../contents/experience"
import { data as projectData } from "../../contents/project"
import { data as article } from "../../contents/Articel"
import About from "../About"
import Footer from "../Footer/Footer"

const RightSection = () => {
  return (
    <div className="grid gap-40 px-3 ">
      <About />
      <ContentContainer
        title="Experience"
        data={experience} />

      <ContentContainer
        title="Project"
        data={projectData} />

      <ContentContainer
        title="Article"
        data={article} />

    <Footer />
    </div>
  )
}

export default RightSection