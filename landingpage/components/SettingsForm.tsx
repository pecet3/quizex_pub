import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { LoadingAnimation } from "./LoadingAnimation";
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

export const SettingsForm: React.FC<{}> = ({}) => {
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const finalStepVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  };
  const finalButtonVariants = {
    clicked: { opacity: 1, scale: [1, 0.9, 1] },
  };
  const controlFinal = useAnimation();
  const pickedNotes: Note[] = defaultNotes;
  useEffect(() => {
    setTimeout(() => {
      controlFinal.start("visible");
      controlFinal.start("clicked");
    }, 3000);
    setTimeout(() => {
      setIsLoading(true);
    }, 7000);
  }, [controlFinal]);
  return (
    <div className="flex  flex-col-reverse items-center gap-2">
      <form
        id="settingsForm"
        className="cartoon-container-transparent bg-amber-100 text-center"
      >
        <div className="bg-slate-300 flex flex-col gap-2 p-2 rounded-md border border-black">
          <input
            value={"Lorem ipsum"}
            type="text"
            id="nameInput"
            name="roomName"
            className="cartoon-input"
            placeholder="Room Name"
            required
          />
          <input
            value={"Lorem ipsum"}
            type="text"
            id="categoryInput"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            className="cartoon-input"
            placeholder="Quiz Category"
          />
          <p className="text-xs max-w-sm">
            Enter the category specified for the notes you provided. You can
            leave this field blank, then a general quiz based on the notes will
            be generated.
          </p>

          <p>
            <b>Chosen Notes: </b>
            {pickedNotes.map((n, index) => (
              <i key={n.uuid}>
                {n.title}
                {index !== pickedNotes.length - 1 ? ", " : ""}
              </i>
            ))}
          </p>
        </div>
        <div className="flex font-mono flex-row  items-end justify-center gap-4">
          <div className="flex flex-col">
            <label className="rounded-lg font-mono text-lg  font-bold underline">
              Rounds:
            </label>
            <select id="maxRounds" name="maxRounds" className="cartoon-input">
              {[...Array(18)].map((_, i) => (
                <option
                  key={i}
                  value={(i + 3).toString()}
                  className="text-center"
                >
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
              defaultValue={30}
            >
              <option value="10" className="text-center">
                10 sec
              </option>
              <option value="15" className="text-center">
                15 sec
              </option>
              <option value="20" className="text-center">
                20 sec
              </option>
              <option value="30" className="text-center">
                30 sec
              </option>
              <option value="45" className="text-center">
                45 sec
              </option>
              <option value="60" className="text-center">
                60 sec
              </option>
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
            >
              <option value="easy" className="text-center">
                Easy
              </option>
              <option value="medium" className="text-center">
                Medium
              </option>
              <option value="hard" className="text-center">
                Hard
              </option>
              <option value="veryhard" className="text-center">
                Very Hard
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="rounded-lg font-mono text-lg font-bold underline">
              Language:
            </label>
            <select id="lang" name="lang" className="cartoon-input">
              <option value="english" className="text-center">
                English
              </option>
              <option value="polish" className="text-center">
                Polish
              </option>
              <option value="spanish" className="text-center">
                Spanish
              </option>
              <option value="french" className="text-center">
                French
              </option>
              <option value="german" className="text-center">
                German
              </option>
              <option value="italian" className="text-center">
                Italian
              </option>
              <option value="portuguese" className="text-center">
                Portuguese
              </option>
              <option value="russian" className="text-center">
                Russian
              </option>
              <option value="chinese" className="text-center">
                Chinese
              </option>
              <option value="japanese" className="text-center">
                Japanese
              </option>
              <option value="korean" className="text-center">
                Korean
              </option>
              <option value="arabic" className="text-center">
                Arabic
              </option>
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
            />
            <label htmlFor="isPrivate" className="ml-2 text-lg font-bold">
              Private Room
            </label>
          </span>
          <p className="text-xs font-extralight">
            (The room won't appear on the room list)
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
      </form>
    </div>
  );
};
