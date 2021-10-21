import React from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const PhotoCart = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [setLocalStorage, storedValue] = useLocalStorage(key, false);
  const Icon = storedValue ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show && (
        <React.Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button
            onClick={() => {
              setLocalStorage(!storedValue);
            }}
          >
            <Icon size="32px" /> {likes} Likes!
          </Button>
        </React.Fragment>
      )}
    </Article>
  );
};
