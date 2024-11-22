import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="flex justify-end mb-4 ">
            <a href="#">
                <span >
                    power by React.js and Tailwind
                    <FontAwesomeIcon className="px-2" icon={faGithub} />
                </span>
            </a>
        </div>
    )
}

export default Footer