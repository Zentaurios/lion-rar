'use client';
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const createLionEmoji = () => {
      const lion = document.createElement("div");
      lion.className = "lion-emoji";
      lion.textContent = "🦁";
      lion.style.left = `${Math.random() * 100}vw`;
      lion.style.animationDuration = `${Math.random() * 3 + 2}s`;
      document.body.appendChild(lion);

      lion.addEventListener("animationend", () => {
        lion.remove();
      });
    };

    const interval = setInterval(createLionEmoji, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)] main-content">
      <main className="bold-text flex flex-col gap-4 sm:gap-8 row-start-2 items-center sm:items-start semi-transparent-bg rounded-xl p-4 sm:p-8 shadow-lg sm:shadow-xl max-w-3xl w-full">
        <Image
          src="/lion-rar-logo.png"
          alt="Lion Rar logo"
          width={270}
          height={57}
          priority
        />
        <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">Welcome to Lawn Rar!</h1>
        <p className="text-xl text-center sm:text-left">
          Join the viral sensation of Lawn Rar! Experience the rar that took the internet by storm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://dexscreener.com/solana/9o5jrynqseee4wuaruli8druwkxxweucxbmq979fkdb7"
          >
            Join the Rar
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://t.me/lawnrarcommunity"
          >
            Join the Community
          </a>
        </div>
        <div className="w-full mt-4 sm:mt-8 flex justify-center">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/0WN4Y4H2dwc?si=aFF0ilGrUtPhZGzO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-xl text-center sm:text-left">
          Official acount on X Coming Soon!
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.reddit.com/r/funny/comments/i5i2e9/went_to_the_shanghai_natural_history_museum_today/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Lawn Lore On Reddit
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.tiktok.com/@bonfirebeetle/video/7380121643475062059"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Lawn in the Wild
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.smartshanghai.com/articles/education/the-natural-history-museum-five-years-old-2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Meng's Home →
        </a>
      </footer>
    </div>
  );
}