import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCategThunk } from "../redux/modules/categorySlice.js";

const CategList = () => {
  
  // Redux : dispatch
  const dispatch = useDispatch();

  // Redux : useSelector
  const categories = useSelector((state) => state.category.categories);

  // useEffect
  useEffect(() => {
    dispatch(getCategThunk());
  }, []);

  return (
    <CategCon>
      <h3>카테고리</h3>
      {categories.map((categ) => {
        return (
          <CategWrap key={categ.id}>
            <h3>{categ.categoryName}</h3>
          </CategWrap>
        );
      })}
    </CategCon>
  );
};

export default CategList;

const CategCon = styled.div`
  height: 25em;
`;

const CategWrap = styled.div`
 margin: 20px 0;
 /* padding: 20px 0; */
`
