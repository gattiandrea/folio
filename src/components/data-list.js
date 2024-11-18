"use client";

export default function ExperienceList({ anno, agency, corso, competenze }) {
  return (
    <div className="relative flex items-start md:space-x-4">
      <div className="flex-grow items-center w-[1/2]">
        <span className="flex flex-row flex-nowrap gap-5 justify-between">
          {anno && <span className="flex-1 text-2xl sm:text-5xl text-white">{anno}</span>}
          {agency && <span className="flex-2 text-2xl sm:text-5xl text-white">{agency}</span>}
          {corso && <span className="flex-1 text-2xl sm:text-5xl text-white">{corso}</span>}
          {competenze && <span className="flex-2 text-2xl sm:text-5xl text-white truncate">{competenze}</span>}
        </span>
      </div>
    </div>
  );
}
