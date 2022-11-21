import Image from "next/image";
import { useEffect, useState } from "react";

const fullText = "Felipe Gomes";

const Home = () => {
  const [text, setText] = useState("F");

  useEffect(() => {
    setTimeout(() => {
      setText(fullText.slice(0, text.length + 1));
    }, 100);
  }, [text]);

  return (
    <main className="flex justify-center items-center min-h-screen p-8 bg-gradient-to-br from-secondary to-primary bg-[length:300%] animate-bg-wave">
      <section className="flex flex-col justify-center items-center p-[3.75rem] max-[500px]:p-[2rem] max-[400px]:p-[1rem] bg-bgTransparent w-[35rem] h-[42rem] rounded-lg shadow-primaryShadow">
        <div className="overflow-hidden w-[18.75rem] h-[18.75rem] max-[500px]:w-[15rem] max-[500px]:h-[15rem] rounded-full border-4 border-textSecondary">
          <Image
            src="/profile.jpg"
            alt="profile-picture"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/profile.jpg"
          />
        </div>
        <h1 className="flex items-center gap-1 text-[2.5rem] max-[500px]:text-[2rem] uppercase font-bold text-textPrimary leading-[3.31rem] mt-[10px] mb-[5px] after:content-[''] after:block after:h-[2.25rem] after:w-[4px] after:bg-textPrimary after:animate-blink">
          {text}
        </h1>
        <h2 className="text-[1.25rem] max-[500px]:text-[1rem] uppercase font-semibold text-textSecondary leading-[1.62rem] mb-[20px]">
          Software developer
        </h2>
        <div className="flex justify-center items-center gap-[15px] bg-textPrimary rounded-md py-[0.75rem] px-[1.5rem] shadow-primaryShadow">
          <a
            href="https://github.com/felipevgomes10"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/github.svg"
              alt="github-icon"
              width={44}
              height={46}
              placeholder="blur"
              blurDataURL="/github.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-gomes-4b70221a8/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/linkedin.svg"
              alt="linkedin-icon"
              width={44}
              height={46}
              placeholder="blur"
              blurDataURL="/linkedin.svg"
            />
          </a>
        </div>
        <a
          href="/cv.pdf"
          download
          className="bg-primary text-textPrimary text-[1.12rem] max-[500px]:text-[1rem] leading-[1.68rem] font-semibold uppercase rounded-md py-[0.75rem] px-[1.5rem] shadow-primaryShadow mt-[20px]"
        >
          Download my cv
        </a>
      </section>
    </main>
  );
};

export default Home;
