
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const slideSettings = {
    dots: false,
   infinite: false,
     speed: 500,
     slidesToShow: 5,
     slidesToScroll: 5,
     initialSlide: 0,
      
   prevArrow: (
     <FontAwesomeIcon className="iconfont-angle" icon={faAngleLeft} />
   ),
   nextArrow: (
     <FontAwesomeIcon className="iconfont-angle" icon={faAngleRight} />
   ),
            
 };