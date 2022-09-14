import React from "react";
import styled from "styled-components";
import { bgleft, bgright } from "../static/images";
import Router from "./Router";

export default function Brower() {
  return (
    <Back>
      <MobileWrap>
        <Router />
      </MobileWrap>
      {/* <BackgroundImgLeft src={bgleft} alt="커버이미지" />
      <BackgroundImgRight src={bgright} alt="커버이미지" /> */}
    </Back>
  );
}

const Back = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* background-color: #3284ff; */
  background-color: #ffffff;
`;

const BackgroundImgLeft = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;
const BackgroundImgRight = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 60%;
`;

const MobileWrap = styled.div`
  background-color: #f5f5f5;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow-y: scroll;

  border: 3px solid pink;

  transform: translate(-50%, -50%);

  min-width: 375px;
  /* width: 20%; */
  height: 100vh;
  /* z-index: 0; */
  box-shadow: 6px 0px 14px rgba(219, 219, 219, 0.39),
    -26px 6px 90px rgba(73, 73, 73, 0.58);

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;
