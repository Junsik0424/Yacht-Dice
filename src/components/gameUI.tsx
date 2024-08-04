import Logo from "src/assets/Logoimg.png";
import styled from "styled-components";

import ScoreBoard from "./scoreboard";

const WholeGame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 30px;
`;
const YachtLogoContainer = styled.div`
  width: 90px;
  height: 30px;

  display: flex;
  align-self: flex-start;
  padding-top: 20px;
  img {
    /* object-fit: cover; */
    width: 100%;
    height: 100%;
  }
`;
const PlayDiv = styled.div`
  display: flex;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 70%;
`;
const KeepDice = styled.div`
  display: flex;
  align-self: center;
  padding: 10px;
  border: 6px solid #6e6e73;
  border-radius: 20px;
  background-color: #f5f5f5;
  width: 400px;
  height: 60px;
`;
const KeepText = styled.text`
  align-self: center;
  color: #6e6e73;
  font-weight: 800;
`;
const PlayDice = styled.div``;
const Reroll = styled.div``;

const GameUI = () => {
  return (
    <WholeGame>
      <YachtLogoContainer>
        <img src={Logo} />
      </YachtLogoContainer>
      <PlayDiv>
        <ScoreBoard />
        <RightDiv>
          <KeepText>keep</KeepText>
          <KeepDice></KeepDice>
          <PlayDice></PlayDice>
          <Reroll></Reroll>
        </RightDiv>
      </PlayDiv>
    </WholeGame>
  );
};

export default GameUI;
