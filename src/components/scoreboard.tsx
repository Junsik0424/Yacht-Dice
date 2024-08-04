import Aces from "src/assets/Aces.png";
import Choice from "src/assets/Choice.png";
import Deuces from "src/assets/Deuces.png";
import Fhouse from "src/assets/Fhouse.png";
import Fives from "src/assets/Fives.png";
import Fokind from "src/assets/Fokind.png";
import Fours from "src/assets/Fours.png";
import Lst from "src/assets/Lstraight.png";
import Sixes from "src/assets/Sixes.png";
import Sst from "src/assets/Sstraight.png";
import Threes from "src/assets/Threes.png";
import Yacht from "src/assets/Yacht.png";
import styled from "styled-components";
// import ScoreLogic from "src/components/scorelogic.tsx" 점수판을 클릭하면 점수가 자동 기입되게끔

const WholeBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  height: 550px;
  width: 250px;
  gap: 4px;
`;

const ImgContainer = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-self: center;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 95%;
  border: 1.4px solid #b3b3b3;
`;
const TableRow = styled.tr`
  border: 1.4px solid #b3b3b3;
`;
const TableleftData = styled.td`
  border: 1.4px solid #b3b3b3;
  color: #6e6e73;
  font-weight: 600;
  width: 150px;
`;
const TablerightData = styled.td`
  border: 1.4px solid #b3b3b3;
  color: #252525;
  font-weight: 600;
`;
const ArrangeDiv = styled.div`
  display: flex;
  gap: 5px 5px;
  padding-left: 2px;
`;

const ScoreBoard = () => {
  return (
    <WholeBoard>
      <Table>
        <TableRow>
          <TableleftData>
            turn
            <br />
            1/12
          </TableleftData>
          <TablerightData>
            Name
            <br />
            (you)
          </TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Aces} />
              </ImgContainer>
              <text>Aces</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Deuces} />
              </ImgContainer>
              <text>Deuces</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Threes} />
              </ImgContainer>
              <text>Threes</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Fours} />
              </ImgContainer>
              <text>Fours</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Fives} />
              </ImgContainer>
              <text>Fives</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Sixes} />
              </ImgContainer>
              <text>Sixes</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>Subtotal</TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>+35 Bonus</TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
      </Table>
      <Table>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Choice} />
              </ImgContainer>
              <text>Choice</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
      </Table>
      <Table>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Fokind} />
              </ImgContainer>
              <text>4 of kind</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Fhouse} />
              </ImgContainer>
              <text>Full House</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Sst} />
              </ImgContainer>
              <text>Small Straight</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Lst} />
              </ImgContainer>
              <text>Large Straight</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
        <TableRow>
          <TableleftData>
            <ArrangeDiv>
              <ImgContainer>
                <img src={Yacht} />
              </ImgContainer>
              <text>Yacht</text>
            </ArrangeDiv>
          </TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
      </Table>
      <Table>
        <TableRow>
          <TableleftData>Total</TableleftData>
          <TablerightData>0</TablerightData>
        </TableRow>
      </Table>
    </WholeBoard>
  );
};

export default ScoreBoard;
