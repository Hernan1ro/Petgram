import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { UseLikeMutation } from "../../hooks/useLikeMutation";
import { Link } from "react-router-dom";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const PhotoCart = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`;
  const [storedValue, setLocalStorage] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();
  const { toggleLikePhoto } = UseLikeMutation();
  const handleFavClick = () => {
    setLocalStorage(!storedValue);
    if (!storedValue) {
      toggleLikePhoto({
        variables: {
          input: { id },
        },
      });
    }
  };
  return (
    <Article ref={element}>
      {show && (
        <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton
            liked={storedValue}
            likes={likes}
            onClick={handleFavClick}
          ></FavButton>
        </React.Fragment>
      )}
    </Article>
  );
};
