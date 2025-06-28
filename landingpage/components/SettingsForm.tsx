import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Note {
  uuid: string;
  title: string;
  length: number;
  preview: string;
  created_at: string;
}

const defaultNotes: Note[] = [
  {
    uuid: "1a2b3c4d-0001-1234-abcd-000000000001",
    title: "Pierwsze kroki w TypeScript",
    length: 1024,
    preview:
      "W tym artykule poznasz podstawy TypeScript i jego przewagi nad JavaScriptem.",
    created_at: "2025-06-15T14:23:00Z",
  },
  {
    uuid: "1a2b3c4d-0002-1234-abcd-000000000002",
    title: "Jak działa async/await",
    length: 875,
    preview:
      "Async/await upraszcza obsługę asynchronicznego kodu i czyni go bardziej czytelnym.",
    created_at: "2025-06-14T09:10:45Z",
  },
  {
    uuid: "1a2b3c4d-0003-1234-abcd-000000000003",
    title: "React useEffect – praktyczne porady",
    length: 1340,
    preview:
      "Hook useEffect pozwala reagować na zmiany stanu i cykl życia komponentu.",
    created_at: "2025-06-12T18:47:30Z",
  },
];

export const SettingsForm: React.FC = () => {
  const [roomName, setRoomName] = useState("Lorem ipsum");
  const [category, setCategory] = useState("Lorem ipsum");
  const [maxRounds, setMaxRounds] = useState(8);
  const [secForAnswer, setSecForAnswer] = useState(30);
  const [difficulty, setDifficulty] = useState("easy");
  const [lang, setLang] = useState("english");
  const [isPrivate, setIsPrivate] = useState(false);

  const finalButtonVariants = {
    clicked: { opacity: 1, scale: [1, 0.9, 1] },
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const controlFinal = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      controlFinal.start("visible");
      controlFinal.start("clicked");
    }, 3000);
  }, [controlFinal]);

  return (
    <div className="flex flex-col-reverse items-center gap-2">
      <div className="cartoon-container-transparent bg-amber-100 text-center">
        <div className="bg-slate-300 flex flex-col gap-2 p-2 rounded-md border border-black">
          <input
            value={roomName}
            type="text"
            id="nameInput"
            name="roomName"
            className="cartoon-input"
            placeholder="Room Name"
            onChange={(e) => setRoomName(e.target.value)}
            required
          />
          <input
            value={category}
            type="text"
            id="categoryInput"
            name="category"
            className="cartoon-input"
            placeholder="Quiz Category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <p className="text-xs max-w-sm">
            Enter the category specified for the notes you provided. You can
            leave this field blank, then a general quiz based on the notes will
            be generated.
          </p>

          <p>
            <b>Chosen Notes: </b>
            {defaultNotes.map((n, index) => (
              <i key={n.uuid}>
                {n.title}
                {index !== defaultNotes.length - 1 ? ", " : ""}
              </i>
            ))}
          </p>
        </div>

        <div className="flex font-mono flex-row items-end justify-center gap-4">
          <div className="flex flex-col">
            <label className="rounded-lg font-mono text-lg font-bold underline">
              Rounds:
            </label>
            <select
              id="maxRounds"
              name="maxRounds"
              className="cartoon-input"
              value={maxRounds}
              onChange={(e) => setMaxRounds(parseInt(e.target.value))}
            >
              {[...Array(18)].map((_, i) => (
                <option key={i} value={i + 3}>
                  {i + 3}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col items-center">
            <label className="rounded-lg text-sm font-bold underline w-24 break-words">
              Time for answer:
            </label>
            <select
              id="sec_for_answer"
              name="sec_for_answer"
              className="cartoon-input"
              value={secForAnswer}
              onChange={(e) => setSecForAnswer(parseInt(e.target.value))}
            >
              {[10, 20, 30, 40, 50, 60].map((sec) => (
                <option key={sec} value={sec}>
                  {sec} sec
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex font-mono items-center sm:flex-row flex-col gap-4 sm:items-end justify-center">
          <div className="flex flex-col">
            <label className="rounded-lg text-lg font-bold underline">
              Difficulty:
            </label>
            <select
              id="difficulty"
              name="difficulty"
              className="cartoon-input max-w-24"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              <option value="veryhard">Very Hard</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="rounded-lg font-mono text-lg font-bold underline">
              Language:
            </label>
            <select
              id="lang"
              name="lang"
              className="cartoon-input"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="english">English</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col items-center mt-2">
          <span className="flex items-center">
            <input
              type="checkbox"
              id="isPrivate"
              name="isPrivate"
              className="w-5 h-5 accent-teal-600"
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
            />
            <label htmlFor="isPrivate" className="ml-2 text-lg font-bold">
              Private Room
            </label>
          </span>
          <p className="text-xs font-extralight">
            (The room won&apos;t appear on the room list)
          </p>
        </div>

        <motion.button
          initial="hidden"
          variants={finalButtonVariants}
          animate={controlFinal}
          transition={{ duration: 0.7, delay: 2 }}
          className="btn bg-teal-200"
        >
          Create
        </motion.button>
      </div>
    </div>
  );
};
