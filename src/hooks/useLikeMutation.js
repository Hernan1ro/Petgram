import { useMutation } from "@apollo/client";
import { gql } from "apollo-boost";

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;
export const UseLikeMutation = () => {
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO);

  return { toggleLikePhoto };
};
