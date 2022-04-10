import React from "react";

export default function CardMain() {
  return (
    <div className="max-w-[90%] mx-auto px-3 mb-10">
      <h2 className="text-xl text-neutral-100 font-bold tracking-tight mb-1">
        About
      </h2>
      <p className="text-neutral-350 text-sm mb-5">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>

      <h2 className="text-xl text-neutral-100 font-bold tracking-tight mb-1">
        Interests
      </h2>
      <p className="text-neutral-350 text-sm">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}
