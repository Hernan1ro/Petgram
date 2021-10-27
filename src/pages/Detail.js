import React from "react";
import { PhotoCartWithQuery } from "../container/PhotoCardWithQuery";
import { Layout } from "../components/Layout";

export const Detail = (props) => {
  return (
    <Layout title={`Fotografía ${props.match.params.id}`}>
      <PhotoCartWithQuery id={props.match.params.id} />
    </Layout>
  );
};
