import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className=" bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Availabe for new projects</div>
          </div>
        </div>
        <h1 className="">Building Exceptional User Experiences</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
          quibusdam?
        </p>
        <div>
          <button>
            <span>Explore My Work</span>
            <ArrowDown />
          </button>
          <button>
            <span>👋🏻</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
