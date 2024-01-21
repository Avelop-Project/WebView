/*global kakao*/
import React, { useEffect } from "react";

import styled from "styled-components";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById("map");

    // 지도를 생성할 때 필요한 기본 옵션
    const options = {
      // 지도 중심 좌표
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      // 지도의 레벨(확대, 축소 정도)
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);

  return <Container id="map"></Container>;
};

export default KakaoMap;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: orange;
`;
