import React, { useState } from "react";

// props 타입을 별도로 정의합니다.
interface ScoreBoardProps {
  playerName: string;
}

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

const ScoreBoard = ({ playerName }: ScoreBoardProps) => {
  const [board, setBoard] = useState<PlayerScore>({ ...initialScore });

  const calculateScore = (category: PlayerScoreCategory, dice: number[]) => {
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
      case "Full House": {
        const counts = dice.reduce(
          (acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
          },
          {} as Record<number, number>,
        );
        score = Object.values(counts).sort().toString() === "2,3" ? 25 : 0;
        break;
      }
      case "Small Straight": {
        const uniqueDice = Array.from(new Set(dice)).sort();
        score =
          "1234".split("").every((val) => uniqueDice.includes(Number(val))) ||
          "2345".split("").every((val) => uniqueDice.includes(Number(val))) ||
          "3456".split("").every((val) => uniqueDice.includes(Number(val)))
            ? 30
            : 0;
        break;
      }
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
  };

  const handleUpdateScore = () => {
    // "Threes" 카테고리와 주사위 [3, 3, 3, 4, 5]로 점수 계산
    const dice = [3, 3, 3, 4, 5];
    const category: PlayerScoreCategory = "Threes";
    const score = calculateScore(category, dice);

    // 상태를 직접 업데이트
    setBoard((prevBoard) => {
      const updatedBoard = { ...prevBoard };
      updatedBoard[category] = score;

      // 보너스 계산
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

      return updatedBoard;
    });
  };

  return (
    <div>
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
      <button onClick={handleUpdateScore}>Threes 점수 업데이트</button>
    </div>
  );
};

export default ScoreBoard;
