import React from "react";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";

export default function CardFooter() {
  return (
    <footer className="bg-primary-200 py-8 flex justify-center rounded-b-2xl">
      <a href="#" className="mr-8">
        <img src={twitter} alt="Twitter Icon" class="w-8" />
      </a>
      <a href="#" className="mr-8">
        <img src={facebook} alt="Facebook Icon" class="w-8" />
      </a>
      <a href="#" className="mr-8">
        <img src={instagram} alt="Instagram Icon" class="w-8" />
      </a>
      <a href="#">
        <img src={github} alt="Github Icon" class="w-8" />
      </a>
    </footer>
  );
}
