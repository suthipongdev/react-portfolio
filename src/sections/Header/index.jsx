import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../contents/header";

const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl text-primaryTitle font-bold">{data.name}</div>
      <div className="text-xl text-primaryTitle font-semibold">
        {data.title}
      </div>
      <div className="text-sm w-4/5 ">{data.caption}</div>
      <div className="mt-4 ">
        <a href={data.link} target="_blank">
          <span className="bg-primaryBase py-2 px-5 rounded text-primaryBg">
            Viwe Resume
            <span className="rotate-90 inline-block ml-2 text-sm">
              <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
