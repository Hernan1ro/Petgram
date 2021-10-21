import React from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const PhotoCart = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = React.useRef(null);
  const [show, setShow] = React.useState(false);
  React.useEffect(
    function () {
      // console.log(element.current);
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          console.log("si");
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    },
    [element]
  );
  return (
    <Article ref={element}>
      {show && (
        <React.Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size="32px" /> {likes} Likes!
          </Button>
        </React.Fragment>
      )}
    </Article>
  );
};
