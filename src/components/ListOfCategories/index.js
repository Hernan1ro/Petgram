import React, { useEffect, useState } from "react";
import { Category } from "../Category";

import { List, Item } from "./styles";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function () {
    window
      .fetch("https://petgram-app-hernan-hernan1ro.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);
  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      document.addEventListener("scroll", onScroll);
      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = (fixed) => {
    return (
      <List className={fixed ? "fixed" : ""}>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))}
      </List>
    );
  };

  return (
    <>
      {renderList()} {showFixed && renderList(true)}
    </>
  );
};
