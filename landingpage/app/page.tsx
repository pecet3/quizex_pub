"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { MdQuestionMark } from "react-icons/md";
import { GrDiamond } from "react-icons/gr";
import Link from "next/link";

export default function Home() {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.5 });

  return (
    <main className="flex flex-col items-center justify-center mb-32">
      <motion.section
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" flex flex-col 
      gap-8 sm:gap-8 items-center justify-center
      p-2 sm:p-4 max-w-xl h-[80vh] "
      >
        <div
          className="justify-center
            font-bold   flex  flex-col gap-0
                items-center"
        >
          <TypeAnimation
            sequence={[400, "Quizex", 1000]}
            wrapper="div"
            speed={10}
            cursor={false}
            className="font-mono m-auto font-extrabold 
            tracking-widest md:mt-auto underline decoration-teal-300 
       text-tal-600 col-span-4 left-1.5 text-center text-[5.5rem]  md:text-[12rem] "
          />

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          >
            <p className="font-thin text-black text-lg sm:text-2xl pb-12">
              Quiz Learning Platform driven by AI
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.15, rotate: 0 }}
              whileTap={{ scale: 1 }}
              color={"black"}
              animate={{
                y: [0],
                scale: [1, 1.1, 1],
                rotate: [0],
                transition: {
                  duration: 2.2,
                  delay: 1,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="btn ring-2 ring-black bg-purple-200"
            >
              <Link
                href="https://play.quizex.app/"
                className="flex items-center gap-2 font-mono text-xl sm:text-2xl"
              >
                <FaRegCirclePlay size={32} color="black" /> Play
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={ref2}
        key={inView2.toString()}
        initial={{ opacity: 0, y: 0 }}
        animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col items-center h-[64vh] sm:h-[80vh] justify-center gap-8 "
      >
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 20 }}
          transition={{ delay: 1.4, duration: 0.3 }}
          className="hidden sm:block text-slate-300 absolute bottom-24 left-20"
        >
          <MdQuestionMark size={240} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60, y: 20, scale: 0 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -20 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          className="hidden sm:block text-slate-300 absolute bottom-20 right-64"
        >
          <MdQuestionMark size={120} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60, y: 20, scale: 0 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -20 }}
          transition={{ delay: 1.3, duration: 0.3 }}
          className="hidden sm:block text-slate-300 absolute top-80 right-20"
        >
          <MdQuestionMark size={200} />
        </motion.div>

        <TypeAnimation
          sequence={[100, "What is Quizex?", 1000]}
          wrapper="div"
          speed={60}
          cursor={false}
          className={`text-3xl sm:text-6xl  text-gray-800 font-extrabold  z-40
            tracking-widest `}
        />

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.3 }}
          className="text-lg sm:text-2xl text-gray-700 text-center max-w-3xl z-40"
        >
          Quizex is an AI-driven learning platform that not only helps users
          create smart notes with AI assistance but also generates quizzes based
          on those notes or provided category. These quizzes can be played in
          multiplayer mode, allowing users to compete with friends or other
          players. By combining AI-powered note-taking with engaging quiz
          challenges, Quizex transforms studying into an interactive and
          enjoyable experience!
        </motion.p>
      </motion.section>

      <motion.section
        ref={ref3}
        key={inView3.toString() + "b"}
        initial={{ opacity: 0, y: 0 }}
        animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col items-center h-[64vh] sm:h-[100vh] justify-center gap-8 "
      >
        <motion.div
          initial={{ opacity: 0, y: -60, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ delay: 1.0, duration: 0.4 }}
          className="hidden sm:block text-sky-200  absolute bottom-48 -left-10"
        >
          <GrDiamond size={200} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60, y: -60, scale: 0 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
          transition={{ delay: 1.1, duration: 0.3 }}
          className="hidden sm:block text-sky-200  absolute bottom-20 right-64"
        >
          <GrDiamond size={160} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60, y: -70, scale: 0 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
          transition={{ delay: 1.1, duration: 0.4, ease: "backInOut" }}
          className="hidden sm:block text-sky-200 absolute top-64 right-0"
        >
          <GrDiamond size={180} />
        </motion.div>

        <TypeAnimation
          sequence={[100, "Premium plan", 1000]}
          wrapper="div"
          speed={60}
          cursor={false}
          className={`text-3xl sm:text-6xl  text-gray-800 font-extrabold z-40
            tracking-widest `}
        />

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="text-lg sm:text-2xl text-gray-700 text-center max-w-3xl z-40"
        >
          The Premium plan on Quizex unlocks a variety of extra features to
          elevate your learning experience. While the standard plan only allows
          quizzes based on categories, the Premium plan lets you create quizzes
          from your own AI-generated notes as well. On top of that, the quiz
          generator in the Premium plan is more precise, ensuring questions are
          tailored to your content. At just <b>$5 per month</b>, the Premium
          plan also gives you access to AI-generated notes, which are
          unavailable in the standard plan. With these added benefits, studying
          becomes more personalized, interactive, and efficient.
        </motion.p>
      </motion.section>
    </main>
  );
}
