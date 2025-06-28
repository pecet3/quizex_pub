import { motion } from "framer-motion";
import { BsGearWideConnected } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { RiAiGenerate2 } from "react-icons/ri";
export const LoadingAnimation = ({
  majorText,
  minorText,
}: {
  majorText?: string;
  minorText?: string;
}) => {
  return (
    <div className="gap-1 flex  flex-col items-center scale-150 my-4">
      <div className="flex items-center gap-2 mr-10 scale-110">
        <motion.div
          color={"black"}
          animate={{
            x: [-10, 10, 100, 100, 100],
            rotate: [0],
            transition: {
              duration: 2.5,
              delay: 0.5,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="relative"
        >
          <motion.div
            color={"black"}
            animate={{
              scale: [0, 0, 1, 1, 1],
              rotate: [0],
              transition: {
                duration: 2.5,
                delay: 0.5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="absolute"
          >
            <RiAiGenerate2 size={40} className="text-teal-600" />
          </motion.div>
          <motion.div
            color={"black"}
            animate={{
              scale: [1, 1, 0, 0, 0],
              rotate: [0],
              transition: {
                duration: 2.5,
                delay: 0.5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className=""
          >
            <IoDocumentText size={36} className="text-sky-800" />
          </motion.div>
        </motion.div>
        <div className="flex items-start">
          <motion.div
            color={"black"}
            animate={{
              y: [0],
              rotate: [0, 180, 360],
              transition: {
                duration: 2.5,
                delay: 0,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className=""
          >
            <BsGearWideConnected size={30} />
          </motion.div>
          <motion.div
            color={"black"}
            animate={{
              y: [0],
              rotate: [0, 180, 360],
              transition: {
                duration: 1,
                delay: 0,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className=""
          >
            <FaGear size={18} />
          </motion.div>
        </div>
      </div>
      <p className="text-xl">{majorText}</p>
      <p className="text-base">{minorText}</p>
    </div>
  );
};
