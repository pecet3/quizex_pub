import { Section } from "@/components/DocumentsCompontents";

export default function Home() {
  const appName = "Quizex";

  return (
    <main className="max-w-4xl w-full m-auto p-2 mb-64">
      <div className="mt-20"></div>
      <h1 className="text-2xl font-bold mb-4">About {appName}</h1>

      <div className="space-y-6 mt-6">
        <Section title="1. What is Quizex?">
          <p>
            {appName} is a learning platform powered by artificial intelligence.
            Its main feature allows users to generate multiplayer quizzes based
            on their notes or a specific category. Additionally, {appName} helps
            users create structured notes with the assistance of AI, making the
            learning process even more efficient. We believe that quizzes are a
            great mnemonic technique that can significantly accelerate learning
            and make it more effective.
          </p>
        </Section>

        <Section title="2. What Quizex is Not?">
          <p>
            {appName} is not a gambling platform. While there are some
            gamification elements, such as levels and experience points, their
            sole purpose is to motivate learning and have nothing to do with
            gambling.
          </p>
        </Section>

        <Section title="3. Our Mission">
          <p>
            Our mission is to promote learning and support users in their
            educational journey through the previously mentioned features. We
            strive to create an inclusive environment where everyone feels
            welcome, regardless of age, gender, orientation, or background. Any
            form of hate speech will be strictly punished. We are also open to
            collaborations with schools, universities, and various educational
            or non-educational institutions.
          </p>
        </Section>
      </div>
    </main>
  );
}
