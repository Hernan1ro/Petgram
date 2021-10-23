import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { UseLikeMutation } from "../../hooks/useLikeMutation";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const PhotoCart = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`;
  const [storedValue, setLocalStorage] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();
  const { toggleLikePhoto } = UseLikeMutation();
  const handleFavClick = () => {
    setLocalStorage(!storedValue);
    toggleLikePhoto({
      variables: {
        input: { id },
      },
    });
  };
  return (
    <Article ref={element}>
      {show && (
        <React.Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
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
