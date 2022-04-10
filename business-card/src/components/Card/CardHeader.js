import React from "react";
import profile from "../../assets/profile.jpg";
import mail from "../../assets/mail.svg";
import linkedin from "../../assets/linkedin.svg";

export default function CardHeader() {
  return (
    <header className="bg-primary-100 rounded-2xl mb-10">
      <img
        src={profile}
        alt="Laura Smith"
        className="mb-5 rounded-t-2xl relative -top-1 w-full"
      />
      <h1 className="font-bold text-2xl text-center text-white tracking-wide leading-8">
        Laura Smith
      </h1>
      <p className="text-center text-accent text-sm mb-3 leading-4">
        Frontend Developer
      </p>
      <a
        href="#"
        className="block text-center text-neutral-100 text-xs mb-5 leading-4"
      >
        laurasmith.website
      </a>
      <div className="grid grid-cols-2 gap-x-4 place-items-stretch max-w-[90%] mx-auto px-3">
        <button className="bg-white flex justify-center items-center py-2 rounded-lg text-gray-700">
          <img src={mail} alt="Mail Icon" className="w-4 mr-2" />
          Email
        </button>
        <button className="bg-secondary flex justify-center items-center py-2 rounded-lg text-white">
          <img src={linkedin} alt="Linkedin Icon" className="w-4 mr-2" />
          LinkedIn
        </button>
      </div>
    </header>
  );
}
