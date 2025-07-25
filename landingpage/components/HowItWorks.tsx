import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { LoadingAnimation } from "./LoadingAnimation";
import { Dashboard } from "./Dashboard";
import { SettingsForm } from "./SettingsForm";

export const HowItWorks = () => {
  const controlBrowser = useAnimation();
  const browserVariants = {
    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
    hidden: { opacity: 0, scale: 1, x: 0, y: -100 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  const [finalRef, inFinalView] = useInView();
  const image1Variants = {
    visible1: { opacity: 1, scale: 1, y: -10, rotate: -12 },
    hidden: { opacity: 0, scale: 0.2, y: -50, rotate: 0 },
  };
  const image2Variants = {
    visible2: { opacity: 1, scale: 1, y: -15 },
    hidden: { opacity: 0, scale: 0, y: -50 },
  };
  const image3Variants = {
    visible3: { opacity: 1, scale: 1, y: -9, rotate: 12 },
    hidden: { opacity: 0, scale: 0, y: -30 },
  };

  const controlFinal = useAnimation();

  const loading = useAnimation();
  const loadingVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };
  const finalStepVariants = {
    visible: { opacity: 1, scale: 1, y: 0, rotate: 0 },
    hidden: { opacity: 0, scale: 0, y: -200, rotate: -240 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible1");
      control.start("visible2");
      control.start("visible3");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  useEffect(() => {
    if (inFinalView) {
      controlFinal.start("visible");
      controlFinal.start("clicked");
    }
  }, [controlFinal, inFinalView]);
  return (
    <section
      id="offer"
      className="h-auto bg-noise3 flex flex-col 
        w-full pb-24 lg:px-0 px-4 bg-slate-500 bg-opacity-10
        justify-start items-center 
       "
    >
      <motion.h2
        className="underline decoration-4 decoration-wavy underline-offset-2 py-16 px-4
       decoration-teal-400 font-ibm-plex text-4xl md:text-5xl text-center m-auto tracking-wider"
      >
        How it Works?
      </motion.h2>
      <div
        className="pb-4 px-4 flex flex-col 
      md:max-w-6xl w-full items-start justify-start gap-4"
      >
        <div className="flex md:flex-row flex-col w-full  justify-between items-end my-0 gap-0">
          <div
            className="flex flex-col w-full md:w-auto items-center justify-center
           rounded-2xl mt-4"
          >
            <span className="flex m-auto items-center ">
              <motion.div
                ref={ref}
                variants={image1Variants}
                initial="hidden"
                animate={control}
                whileInView="visible1"
                whileHover={{ scale: 1.03, y: -15 }}
                transition={{ duration: 0.5 }}
                className="hover:cursor-pointer bg-slate-100 hover:shadow-lg
                 hover:shadow-black duration-100
                 shadow-md shadow-black 
                 p-1 rounded- pb-6 w-24 sm:w-44  h-32 sm:h-52 rounded-tr-xl"
              >
                <p className="text-sm font-bold border-b border-black">
                  Memory managment
                </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  saepe reprehenderit dolor sit tempora modi repudiandae,
                  dolores itaque, quis sunt in fuga porro quas. Atque porro nemo
                  consequatur soluta distinctio?
                </p>
              </motion.div>
              <motion.div
                ref={ref}
                variants={image2Variants}
                initial="hidden"
                animate={control}
                whileInView="visible2"
                whileHover={{
                  scale: 1.03,
                  y: -30,
                }}
                transition={{ duration: 0.5 }}
                className="hover:cursor-pointer bg-slate-100  hover:shadow-lg hover:shadow-black duration-100
                 shadow-md shadow-black 
                 p-1 z-30  pb-6 w-28 sm:w-52 h-40 sm:h-64   rounded-tr-xl
              "
              >
                <p className="text-sm border-b border-black font-bold">
                  Memory managment
                </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  saepe reprehenderit dolor sit tempora modi repudiandae,
                  dolores itaque, quis sunt in fuga porro quas. Atque porro nemo
                  consequatur soluta distinctio?saepe reprehenderit dolor sit
                  tempora modi repudiandae, dolores itaque, quis sunt in
                  fugasaepe reprehenderit dolor sit tempora modi repudiandae,
                  dolores itaque, quis sunt in fuga
                </p>
              </motion.div>
              <motion.div
                ref={ref}
                variants={image3Variants}
                initial="hidden"
                animate={control}
                whileInView="visible3"
                whileHover={{
                  scale: 1.03,
                  y: -20,
                }}
                transition={{ duration: 0.5 }}
                className="hover:cursor-pointer bg-slate-100  hover:shadow-lg hover:shadow-black duration-100
                 shadow-md shadow-black  rounded-tr-xl
                p-1 rounded- pb-6 w-24 sm:w-44  h-32 sm:h-52"
              >
                <p className="text-sm font-bold border-b border-black">
                  Memory managment
                </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  saepe reprehenderit dolor sit tempora modi repudiandae,
                  dolores itaque, quis sunt in fuga porro quas. Atque porro nemo
                  consequatur soluta distinctio?
                </p>
              </motion.div>
            </span>
          </div>
          <h3
            className="text-center italic underline underline-offset-4 
           decoration-fuchsia-400 font-thin m-auto text-5xl p-2"
          >
            1. Select notes to use <br /> in the Quiz
          </h3>
        </div>
        <Image
          alt=""
          src={"/arrow.png"}
          height={400}
          width={400}
          className="brightness-0 rounded-xl h-32 w-32 self-center opacity-80 mr-40"
        />
        <div
          className="flex flex-row-reverse justify-center 
        items-center m-auto w-full"
        >
          {" "}
          {/* <h3 className="text-center font-light text-2xl m-0 ">
            then wait a while for <br />
            AI Quiz Generator
          </h3> */}
          <div className=" sm:ml-96 flex flex-col justify-end items-center gap-8 m-auto w-full">
            <h3
              className="italic underline underline-offset-4  decoration-sky-500 
            text-center font-light text-5xl m-0"
            >
              2. Set up the game
            </h3>
            <motion.div
              variants={browserVariants}
              initial="hidden"
              animate={controlBrowser}
              whileInView="visible"
              transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
              className="self-center"
            >
              <SettingsForm />
            </motion.div>
          </div>
        </div>
        <div className="m-auto pl-32">
          <Image
            alt=""
            src={"/arrow_drawing.png"}
            height={400}
            width={400}
            className="brightness-0  translate-x-32 rotate-12 rounded-xl h-32 w-32 
            self-center opacity-80 "
          />
          <h4
            className={`italic underline decoration-red-500 decoration-dashed
                duration-300 text-2xl w-80 text-center`}
          >
            Then wait a while for AI Quiz Generator
          </h4>
          <motion.div
            variants={loadingVariants}
            initial="hidden"
            animate={loading}
            whileInView="visible"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="self-center  py-8"
          >
            <motion.div animate={{ scale: 1.5 }} className="mt-8">
              <LoadingAnimation />
            </motion.div>
          </motion.div>
          <Image
            alt=""
            src={"/arrow_w.png"}
            height={400}
            width={400}
            className="brightness-0 rounded-xl -rotate-12 
            h-48 w-48 self-center opacity-90 "
          />
        </div>
        <div className="flex flex-col gap-8 items-center m-auto">
          <h3
            className="text-center italic underline underline-offset-4 
           decoration-emerald-400 font-thin m-auto text-5xl p-2"
          >
            3. Voilà, the game is ready <br />
            and you can play with your friends!
          </h3>
          <div ref={finalRef} className="w-full">
            <motion.div
              variants={finalStepVariants}
              initial="hidden"
              animate={controlFinal}
              whileInView="visible"
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className=" "
            >
              <Dashboard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
