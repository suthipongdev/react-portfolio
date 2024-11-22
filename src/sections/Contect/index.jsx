import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contect = () => {
  return (
    <div className="flex items-end gap-4 mb-4 text-2xl ">
      <FontAwesomeIcon
        className="hover:text-3xl scale-125 duration-100"
        icon={faGithub}
      />
      <FontAwesomeIcon
        className="hover:text-3xl scale-125 duration-100"
        icon={faFacebook}
      />
      <FontAwesomeIcon
        className="hover:text-3xl scale-125 duration-100"
        icon={faInstagram}
      />
      <FontAwesomeIcon
        className="hover:text-3xl scale-125 duration-100"
        icon={faLinkedin}
      />
    </div>
  );
};

export default Contect;
