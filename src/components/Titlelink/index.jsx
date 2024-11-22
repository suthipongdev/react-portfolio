import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Titlelink =({isHighLight,title,link}) => {
if (!link) {
    return <div
    className={` transition-all ${isHighLight ? "text-primarySubcontent" : ""}`}>{title}
  </div>
}

    return(
        <div
            className={` transition-all ${isHighLight ? "text-primarySubcontent" : ""}`}>
            <a href={link} target="_blank">
            {title}
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`mx-1 mb-1 text-xs -rotate-45 ${isHighLight ? "translate-x-1 -translate-y-1" : ""}`}
            />
            </a>
          </div>
    )
}

export default Titlelink