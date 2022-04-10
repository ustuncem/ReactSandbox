import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-5xl px-6 py-8 flex justify-between items-center bg-primary-300">
      <div className="flex items-center">
        <img className="w-8 mr-2" src={logo} alt="Logo" />

        <h1 className="text-secondary-200 font-bold text-2xl">ReactFacts</h1>
      </div>

      <p className="font-normal text-secondary-100">React Course - Project 1</p>
    </nav>
  );
}
