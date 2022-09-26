import React, { useState } from "react";
import styled from "styled-components";
// import { bgleft, bgright } from "../static/images";
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

const Back = styled.div``;

// const BackgroundImgLeft = styled.img`
//   position: absolute;
//   left: 0;
//   top: 0;
// `;
// const BackgroundImgRight = styled.img`
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   height: 60%;
// `;

const MobileWrap = styled.div`
  position: relative; // Header position을 sticky로 할 경우
  max-width: 375px;
  height: 100vh;
  overflow-x: hidden;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    #121212 0%,
    #1b60bb 70.31%,
    #3a83e4 82.55%,
    #d8e2ee 95.05%,
    #eeeeee 100%
  );
  box-shadow: 6px 0px 14px rgba(219, 219, 219, 0.39),
    -26px 6px 90px rgba(73, 73, 73, 0.58);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;