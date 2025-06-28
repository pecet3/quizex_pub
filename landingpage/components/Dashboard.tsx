import React, { useState, useEffect } from "react";

import { RxLapTimer } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

export const LittlePaperWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className="bg-yellow-100 m-auto
     shadow-md shadow-gray-100 max-w-sm"
    >
      <div className="p-2"> {children}</div>
    </div>
  );
};
interface GameState {
  round: number;
  question: string;
  answers: string[];
  actions: RoundAction[];
  score: PlayerDto[];
  players_answered: string[];
}
interface User {
  created_at: Date;
  exp: number;
  image_url: string;
  is_draft: boolean;
  level: number;
  name: string;
  progress: number;
  uuid: string;
  has_premium: boolean;
}

interface PlayerDto {
  user: User;
  points: number;
  rounds_won: number[];
  is_answered: boolean;
}

interface RoundAction {
  uuid: string;
  answer: number;
  round: number;
}
interface Settings {
  name: string;
  category: string;
  difficulty: string;
  max_rounds: number;
  language: string;
  sec_for_answer: number;
  is_private: boolean;
  is_premium?: boolean;
  is_notes_based?: boolean;
}
const defaultGameState: GameState = {
  round: 0,
  question: "Lorem ipsum  Lorem ipsum Lorem ipsum",
  answers: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  actions: [],
  score: [
    {
      is_answered: true,
      points: 0,
      rounds_won: [0],
      user: {
        name: "Jakub",
        created_at: new Date(),
        image_url: "",
        is_draft: false,
        uuid: "",
        exp: 0,
        level: 0,
        progress: 0,
        has_premium: false,
      },
    },
    {
      is_answered: true,
      points: 0,
      rounds_won: [0],
      user: {
        name: "Wiktor",
        created_at: new Date(),
        image_url: "",
        is_draft: false,
        uuid: "",
        exp: 0,
        level: 0,
        progress: 0,
        has_premium: false,
      },
    },
  ],
  players_answered: [],
};
const defaultSettings: Settings = {
  difficulty: "",
  category: "Category",
  language: "",
  max_rounds: 0,
  sec_for_answer: 0,
  name: "",
  is_private: false,
  is_premium: false,
  is_notes_based: false,
};
export const Dashboard = () => {
  const settings = defaultSettings;
  const gameState = defaultGameState;
  const serverMessage = "Have a good game";
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 30));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="scale-100 m-0 sm:m-auto max-w-3xl text-lg flex flex-col">
      <div className="flex justify-between gap-2 z-10 m-0">
        {settings.category !== "" ? (
          <div
            className="text-2xl flex sm:flex-row flex-col items-center font-bold font-mono bg-gray-400 rounded-t-md p-1 border-2
           border-black border-b-0"
          >
            <p className="text-blue-800 italic">{settings.category}</p>
          </div>
        ) : null}
        <div className="text-2xl flex-col sm:flex-row flex items-center gap-1 sm:gap-2 font-black font-mono bg-gray-400 rounded-t-md p-0.5 sm:p-1 px-1 sm:px-2 border-2 border-black border-b-0">
          <div className="flex items-start m-auto gap-1">
            <p>Round: </p>
            <p className="text-blue-800">{gameState.round}</p>
          </div>
        </div>
      </div>

      <form className="flex flex-col gap-6 m-auto  w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-200 border-2 border-black p-2 sm:p-4 rounded-b-xl text-lg">
          <h3 className="sm:col-span-2 text-center font-bold text-2xl">
            {gameState.question}
          </h3>
          {gameState.answers.map((answer, idx) => {
            return (
              <label
                key={idx}
                className={`has-[:checked]:rounded-lg has-[:checked]:scale-[1.01] ${
                  [
                    "bg-blue-200",
                    "bg-red-200",
                    "bg-green-200",
                    "bg-purple-200",
                  ][idx]
                } duration-300 has-[:checked]:bg-gray-700 has-[:checked]:ring hover:scale-[1.025] hover:shadow-md hover:shadow-gray-400 ring-teal-500 has-[:checked]:text-white cursor-pointer flex justify-center items-center rounded-md hover:rounded-lg p-1 border border-black`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={idx}
                  className="hidden"
                />
                <p>{answer}</p>
              </label>
            );
          })}
        </div>

        <p
          className="font-mono text-xl sm:text-2xl text-center
        font-bold italic bg-white p-2 rounded-xl bg-opacity-70"
        >
          {serverMessage}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          <div className="sm:order-1  flex flex-col items-center justify-center gap-2">
            <div
              className="font-bold text-2xl flex items-center gap-1.5
             bg-white rounded-lg px-2 py-1"
            >
              <RxLapTimer size={28} className="" />
              <p className={`w-6 ${timer <= 3 ? "text-red-500" : ""}`}>
                {timer}
              </p>
            </div>
            <button
              type="submit"
              className="bg-teal-300 hover:scale-[1.025] flex gap-2 items-center
              hover:shadow-lg hover:shadow-gray-500 hover:rounded-xl px-6
              border-2 border-black font-mono font-semibold text-3xl
               duration-300 text-black rounded-lg m-auto py-2"
            >
              Send <LuSend />
            </button>
          </div>
          <LittlePaperWrapper>
            <table className="w-full text-xl table-fixed sm:order-none order-last">
              <thead className="">
                <tr className="border-b border-black font-mono font-black">
                  <th className="w-3/4 m-auto">Name</th>
                  <th className="w-1/4 m-auto">Points</th>
                </tr>
              </thead>
              <tbody className="">
                {gameState.score && gameState.score.length > 0
                  ? gameState.score.map((player, idx) => (
                      <tr key={idx}>
                        <td className="flex items-center justify-center">
                          {gameState.players_answered.includes(
                            player.user.uuid
                          ) ? (
                            <IoCheckmark size={26} />
                          ) : null}
                          {player.user.name}
                        </td>
                        <td>{player.points}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </LittlePaperWrapper>
        </div>
      </form>
    </div>
  );
};
