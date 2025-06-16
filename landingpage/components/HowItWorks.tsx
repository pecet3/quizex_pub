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

export const HowItWorks = () => {
  const controlBrowser = useAnimation();
  const [refBrowser, inViewBrowser] = useInView();
  const browserVariants = {
    visible: { opacity: 1, scale: [0, 2.5, 2] },
    hidden: { opacity: 0, scale: 0 },
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
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
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
           bg-black bg-opacity-30 rounded-2xl mt-4"
          >
            <span className="flex m-auto items-center translate-x-4 -translate-y-6">
              <motion.div
                ref={ref}
                variants={image1Variants}
                initial="hidden"
                animate={control}
                whileInView="visible1"
                whileHover={{ scale: 1.03, y: -15 }}
                transition={{ duration: 0.5 }}
                className="h-auto right-10 bg-gray-300 shadow-lg
                 shadow-black 
                p-1 rounded-xl 
              pb-6"
              >
                <Image
                  alt=""
                  src={"/noise.png"}
                  height={400}
                  width={400}
                  className="rounded-md h-40 w-32"
                />
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
                 p-1 z-30 rounded-xl pb-6
              "
              >
                <Image
                  alt=""
                  src={"/noise.png"}
                  height={400}
                  width={400}
                  className="rounded-md h-60 w-48 "
                />
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
                className=" bg-gray-300 shadow-lg
                 shadow-black p-1 rounded-xl pb-6 "
              >
                <Image
                  alt=""
                  src={"/noise.png"}
                  height={400}
                  width={400}
                  className="rounded-md h-40 w-40"
                />
              </motion.div>
            </span>
          </div>
          <h3 className="text-center italic font-thin m-auto text-5xl p-2">
            1. Select your notes to the game
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
          className="flex md:flex-row flex-col-reverse justify-center 
        gap-12 items-center m-auto w-full"
        >
          <h3 className="text-left font-light text-4xl m-0 ">
            2. Start training and wait <br></br>~30min for the complete
          </h3>
          {"   "}
          <motion.div
            variants={browserVariants}
            initial="hidden"
            animate={controlBrowser}
            whileInView="visible"
            transition={{ duration: 2, ease: "easeOut" }}
            className="scale-150"
          >
            <LoadingAnimation />
          </motion.div>
        </div>
        <Image
          alt=""
          src={"/arrow_w.png"}
          height={400}
          width={400}
          className="brightness-0 rounded-xl -rotate-12 h-48 w-48 self-center opacity-90 mt-4 "
        />
        <div className="flex flex-col-reverse md:flex-col items-center m-auto">
          <h3 className="text-center font-extrabold text-4xl m-auto my-6">
            3. Voilà, Your game is ready!
          </h3>
          <div ref={finalRef} className="w-full"></div>

          <motion.div
            variants={finalStepVariants}
            initial="hidden"
            animate={controlFinal}
            transition={{ duration: 0.7, delay: 1 }}
            className="rounded-xl  border-2 "
          >
            <Dashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
