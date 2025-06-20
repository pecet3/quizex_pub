import Image from "next/image";
import { BiWindows } from "react-icons/bi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { IoMdRefresh } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { animate, delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useLayoutEffect } from "react";
import { LoadingAnimation } from "./LoadingAnimation";
import { Dashboard } from "./Dashboard";
import { SettingsForm } from "./SettingsForm";

export const HowItWorks = () => {
  const controlBrowser = useAnimation();
  const [refBrowser, inViewBrowser] = useInView();
  const browserVariants = {
    visible: { opacity: 1, scale: [0, 1], x: 0 },
    hidden: { opacity: 0, scale: 0, x: 300 },
  };
  useEffect(() => {
    if (inView) {
      controlBrowser.start("visible");
    } else {
      controlBrowser.start("hidden");
    }
    console.log(inView);
  }, [controlBrowser, inViewBrowser]);

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

  const finalStepVariants = {
    visible: { opacity: 1, scale: 1, y: 0, rotate: 0 },
    hidden: { opacity: 0, scale: 0, y: -200, rotate: [-360] },
  };
  const finalButtonVariants = {
    clicked: { opacity: 1, scale: [1, 0.9, 1] },
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
    console.log(inFinalView, true);
  }, [controlFinal, inFinalView]);
  return (
    <section
      id="offer"
      className="h-auto bg-noise3 flex flex-col 
        w-full pb-24 lg:px-0 px-4
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
        className="bg-white bg-opacity-5 rounded-xl pb-4 px-4 flex flex-col 
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
                className="bg-gray-300 shadow-lg shadow-black 
                 p-1 rounded-xl pb-6 w-24 sm:w-44  h-32 sm:h-52"
              >
                test
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
                className="bg-gray-300 shadow-lg shadow-black 
                 p-1 z-30 rounded-xl pb-6 w-28 sm:w-52 h-40 sm:h-64 
              "
              >
                test
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
                className=" bg-gray-300 shadow-lg shadow-black 
                 p-1 rounded-xl pb-6 w-24 sm:w-44  h-32 sm:h-52"
              >
                test
              </motion.div>
            </span>
          </div>
          <h3 className="text-center italic font-thin m-auto text-5xl p-2">
            1. Select notes used <br /> in the Quiz
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
          ref={refBrowser}
          className="flex flex-row-reverse justify-center 
        items-center m-auto w-full"
        >
          {" "}
          {/* <h3 className="text-center font-light text-2xl m-0 ">
            then wait a while for <br />
            AI Quiz Generator
          </h3> */}
          <div className=" sm:ml-96 flex flex-col justify-end items-center gap-4 m-auto w-full">
            <h3 className="text-center font-light text-5xl m-0">
              2. Set up the game
            </h3>
            <motion.div
              variants={browserVariants}
              initial="hidden"
              animate={controlBrowser}
              whileInView="visible"
              transition={{ duration: 1, ease: "easeOut" }}
              className="self-center"
            >
              <SettingsForm />
            </motion.div>
          </div>
        </div>
        <div className="m-auto mb-24 mt-12 pl-32">
          <motion.div
            variants={browserVariants}
            initial="hidden"
            animate={controlBrowser}
            whileInView="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            className="self-center mb-8"
          >
            <h4 className={` duration-300 text-2xl w-64 text-center`}>
              Then wait a while for AI Quiz Generator
            </h4>
            <LoadingAnimation />
          </motion.div>
          <Image
            alt=""
            src={"/arrow_w.png"}
            height={400}
            width={400}
            className="brightness-0 rounded-xl -rotate-12 h-48 w-48 self-center opacity-90 mt-4 "
          />
        </div>
        <div className="flex flex-col items-center m-auto">
          <h3 className="text-center font-extrabold text-4xl m-auto my-6">
            3. Voilà, the game is ready <br />
            and you can play with your friends!
          </h3>
          <div ref={finalRef} className="w-full">
            <motion.div
              variants={finalStepVariants}
              initial="hidden"
              animate={controlFinal}
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="rounded-xl  border-2 "
            >
              <Dashboard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
