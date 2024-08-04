// // import * as React from "react";

// // interface ScoreBoardProps {
// //   playerName: string;
// // }

// // interface PlayerScore {
// //   Aces: number;
// //   Twos: number;
// //   Threes: number;
// //   Fours: number;
// //   Fives: number;
// //   Sixes: number;
// //   Bonus: number;
// //   Choice: number;
// //   "Four-Of-A-Kind": number;
// //   "Full House": number;
// //   "Small Straight": number;
// //   "Large Straight": number;
// //   Yacht: number;
// //   "TOTAL SCORE": number;
// // }

// // type PlayerScoreCategory = keyof PlayerScore;

// // interface ScoreBoardState {
// //   board: { [key: string]: PlayerScore };
// // }

// // class ScoreBoard extends React.Component<ScoreBoardProps, ScoreBoardState> {
// //   constructor(props: ScoreBoardProps) {
// //     super(props);
// //     this.state = {
// //       board: this.createScoreBoard(props.playerName),
// //     };
// //   }

// //   createScoreBoard(playerName: string): { [key: string]: PlayerScore } {
// //     return {
// //       [playerName]: {
// //         Aces: 0,
// //         Twos: 0,
// //         Threes: 0,
// //         Fours: 0,
// //         Fives: 0,
// //         Sixes: 0,
// //         Bonus: 0,
// //         Choice: 0,
// //         "Four-Of-A-Kind": 0,
// //         "Full House": 0,
// //         "Small Straight": 0,
// //         "Large Straight": 0,
// //         Yacht: 0,
// //         "TOTAL SCORE": 0,
// //       },
// //     };
// //   }

// //   render() {
// //     const { board } = this.state;
// //     const { playerName } = this.props;

// //     return (
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Category</th>
// //             <th>{playerName}</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {Object.keys(board[playerName]).map((category) => (
// //             <tr key={category}>
// //               <td>{category}</td>
// //               <td>{board[playerName][category as PlayerScoreCategory]}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     );
// //   }
// // }

// // export default ScoreBoard;

// // class CalcScore {
// //   score: number;

// //   constructor() {
// //     this.score = 0;
// //   }

// //   Aces(changeDiceResult: number[]) {
// //     const val1 = changeDiceResult.filter((x) => x === 1).length;
// //     return val1 * 1;
// //   }

// //   Twos(changeDiceResult: number[]) {
// //     const val1 = changeDiceResult.filter((x) => x === 2).length;
// //     return val1 * 2;
// //   }

// //   Threes(changeDiceResult: number[]) {
// //     const val1 = changeDiceResult.filter((x) => x === 3).length;
// //     return val1 * 3;
// //   }

// //   Fours(changeDiceResult: number[]) {
// //     const val1 = changeDiceResult.filter((x) => x === 4).length;
// //     return val1 * 4;
// //   }

// //   Fives(changeDiceResult: number[]) {
// //     const val1 = changeDiceResult.filter((x) => x === 5).length;
// //     return val1 * 5;
// //   }

// //   Sixes(changeDiceResult: number[]) {
// //     const val1 = changeDiceResult.filter((x) => x === 6).length;
// //     return val1 * 6;
// //   }

// //   Choice(changeDiceResult: number[]) {
// //     return changeDiceResult.reduce((acc, curr) => acc + curr, 0);
// //   }

// //   FourOfAKind(changeDiceResult: number[]) {
// //     for (const item of [1, 2, 3, 4, 5, 6]) {
// //       if (changeDiceResult.filter((x) => x === item).length >= 4) {
// //         return changeDiceResult.reduce((acc, curr) => acc + curr, 0);
// //       }
// //     }
// //     return 0;
// //   }

// //   FullHouse(changeDiceResult: number[]) {
// //     const counts = [1, 2, 3, 4, 5, 6].map(
// //       (x) => changeDiceResult.filter((y) => y === x).length,
// //     );
// //     if (counts.includes(3) && counts.includes(2)) {
// //       return 25;
// //     }
// //     return 0;
// //   }

// //   SmallStraight(changeDiceResult: number[]) {
// //     const uniqueDice = Array.from(new Set(changeDiceResult)).sort(
// //       (a, b) => a - b,
// //     );
// //     for (let i = 1; i <= 3; i++) {
// //       if (
// //         uniqueDice.includes(i) &&
// //         uniqueDice.includes(i + 1) &&
// //         uniqueDice.includes(i + 2) &&
// //         uniqueDice.includes(i + 3)
// //       ) {
// //         return 30;
// //       }
// //     }
// //     return 0;
// //   }

// //   LargeStraight(changeDiceResult: number[]) {
// //     const uniqueDice = Array.from(new Set(changeDiceResult)).sort(
// //       (a, b) => a - b,
// //     );
// //     for (let i = 1; i <= 2; i++) {
// //       if (
// //         uniqueDice.includes(i) &&
// //         uniqueDice.includes(i + 1) &&
// //         uniqueDice.includes(i + 2) &&
// //         uniqueDice.includes(i + 3) &&
// //         uniqueDice.includes(i + 4)
// //       ) {
// //         return 40;
// //       }
// //     }
// //     return 0;
// //   }

// //   Yacht(changeDiceResult: number[]) {
// //     const uniqueDice = Array.from(new Set(changeDiceResult));
// //     if (uniqueDice.length === 1) {
// //       return 50;
// //     }
// //     return 0;
// //   }
// // }

// // interface ChoiceScoreProps {
// //   changeDiceResult: number[];
// //   board: any;
// //   playerName: string;
// //   selectNum: string;
// // }

// // class ChoiceScore extends React.Component<ChoiceScoreProps> {
// //   choiceScore() {
// //     const { changeDiceResult, board, playerName, selectNum } = this.props;
// //     const cs = new CalcScore();
// //     let score = 0;

// //     switch (selectNum) {
// //       case "1":
// //         score = cs.Aces(changeDiceResult);
// //         board[playerName]["Aces"] = score;
// //         break;
// //       case "2":
// //         score = cs.Twos(changeDiceResult);
// //         board[playerName]["Twos"] = score;
// //         break;
// //       case "3":
// //         score = cs.Threes(changeDiceResult);
// //         board[playerName]["Threes"] = score;
// //         break;
// //       case "4":
// //         score = cs.Fours(changeDiceResult);
// //         board[playerName]["Fours"] = score;
// //         break;
// //       case "5":
// //         score = cs.Fives(changeDiceResult);
// //         board[playerName]["Fives"] = score;
// //         break;
// //       case "6":
// //         score = cs.Sixes(changeDiceResult);
// //         board[playerName]["Sixes"] = score;
// //         break;
// //       case "7":
// //         score = cs.Choice(changeDiceResult);
// //         board[playerName]["Choice"] = score;
// //         break;
// //       case "8":
// //         score = cs.FourOfAKind(changeDiceResult);
// //         board[playerName]["Four-Of-A-Kind"] = score;
// //         break;
// //       case "9":
// //         score = cs.FullHouse(changeDiceResult);
// //         board[playerName]["Full House"] = score;
// //         break;
// //       case "10":
// //         score = cs.SmallStraight(changeDiceResult);
// //         board[playerName]["Small Straight"] = score;
// //         break;
// //       case "11":
// //         score = cs.LargeStraight(changeDiceResult);
// //         board[playerName]["Large Straight"] = score;
// //         break;
// //       case "12":
// //         score = cs.Yacht(changeDiceResult);
// //         board[playerName]["Yacht"] = score;
// //         break;
// //       default:
// //         console.log("유효한 값이 아닙니다");
// //         break;
// //     }

// //     return board;
// //   }

// //   render() {
// //     return null;
// //   }
// // }

// // interface NextPhaseProps {
// //   board: any;
// //   playerName: string;
// // }

// // class NextPhase extends React.Component<NextPhaseProps> {
// //   bonus() {
// //     const { board, playerName } = this.props;
// //     const num = Object.keys(board[playerName])
// //       .slice(0, 6)
// //       .reduce((acc, key) => acc + board[playerName][key], 0);

// //     if (num >= 63) {
// //       board[playerName]["Bonus"] = 35;
// //     }

// //     return board;
// //   }

// //   totalScore() {
// //     const { board, playerName } = this.props;
// //     const num = Object.keys(board[playerName]).reduce(
// //       (acc, key) => acc + board[playerName][key],
// //       0,
// //     );

// //     board[playerName]["TOTAL SCORE"] = num;
// //     return board;
// //   }

// //   render() {
// //     return null;
// //   }
// // }

// // export { CalcScore, ChoiceScore, NextPhase, ScoreBoard };

import React from "react";

interface PlayerScore {
  Aces: number;
  Twos: number;
  Threes: number;
  Fours: number;
  Fives: number;
  Sixes: number;
  Bonus: number;
  Choice: number;
  "Four-Of-A-Kind": number;
  "Full House": number;
  "Small Straight": number;
  "Large Straight": number;
  Yacht: number;
  "TOTAL SCORE": number;
}

type PlayerScoreCategory = keyof PlayerScore;

const initialScore: PlayerScore = {
  Aces: 0,
  Twos: 0,
  Threes: 0,
  Fours: 0,
  Fives: 0,
  Sixes: 0,
  Bonus: 0,
  Choice: 0,
  "Four-Of-A-Kind": 0,
  "Full House": 0,
  "Small Straight": 0,
  "Large Straight": 0,
  Yacht: 0,
  "TOTAL SCORE": 0,
};

class ScoreBoard extends React.Component<
  { playerName: string },
  { board: PlayerScore }
> {
  constructor(props: { playerName: string }) {
    super(props);
    this.state = {
      board: { ...initialScore },
    };
  }

  calculateScore(category: PlayerScoreCategory, dice: number[]) {
    let score = 0;
    switch (category) {
      case "Aces":
        score = dice.filter((x) => x === 1).length * 1;
        break;
      case "Twos":
        score = dice.filter((x) => x === 2).length * 2;
        break;
      case "Threes":
        score = dice.filter((x) => x === 3).length * 3;
        break;
      case "Fours":
        score = dice.filter((x) => x === 4).length * 4;
        break;
      case "Fives":
        score = dice.filter((x) => x === 5).length * 5;
        break;
      case "Sixes":
        score = dice.filter((x) => x === 6).length * 6;
        break;
      case "Choice":
        score = dice.reduce((acc, curr) => acc + curr, 0);
        break;
      case "Four-Of-A-Kind":
        score = dice.some((val) => dice.filter((x) => x === val).length >= 4)
          ? dice.reduce((acc, curr) => acc + curr, 0)
          : 0;
        break;
      case "Full House":
        // eslint-disable-next-line no-case-declarations
        const counts = dice.reduce(
          (acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
          },
          {} as Record<number, number>,
        );
        score = Object.values(counts).sort().toString() === "2,3" ? 25 : 0;
        break;
      case "Small Straight":
        // eslint-disable-next-line no-case-declarations
        const uniqueDice = Array.from(new Set(dice)).sort();
        score =
          "1234".split("").every((val) => uniqueDice.includes(Number(val))) ||
          "2345".split("").every((val) => uniqueDice.includes(Number(val))) ||
          "3456".split("").every((val) => uniqueDice.includes(Number(val)))
            ? 30
            : 0;
        break;
      case "Large Straight":
        score =
          "12345".split("").every((val) => dice.includes(Number(val))) ||
          "23456".split("").every((val) => dice.includes(Number(val)))
            ? 40
            : 0;
        break;
      case "Yacht":
        score = dice.every((val) => val === dice[0]) ? 50 : 0;
        break;
      default:
        break;
    }
    return score;
  }

  updateScore(category: PlayerScoreCategory, dice: number[]) {
    this.setState((prevState) => {
      const updatedBoard = { ...prevState.board };
      updatedBoard[category] = this.calculateScore(category, dice);

      //bouns 계산
      const upperSectionSum = (
        [
          "Aces",
          "Twos",
          "Threes",
          "Fours",
          "Fives",
          "Sixes",
        ] as PlayerScoreCategory[]
      ).reduce((acc, cat) => acc + updatedBoard[cat], 0);
      updatedBoard["Bonus"] = upperSectionSum >= 63 ? 35 : 0;

      // 총 점수 계산
      updatedBoard["TOTAL SCORE"] = (
        Object.keys(updatedBoard) as PlayerScoreCategory[]
      ).reduce((acc, key) => {
        return key !== "TOTAL SCORE" ? acc + updatedBoard[key] : acc;
      }, 0);

      return { board: updatedBoard };
    });
  }

  render() {
    const { board } = this.state;
    const { playerName } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>{playerName}</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(board).map((category) => (
            <tr key={category}>
              <td>{category}</td>
              <td>{board[category as PlayerScoreCategory]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ScoreBoard;
