import logo from "../assets/logo.svg";

export default function Navbar(props) {
  return (
    <nav className="mx-auto max-w-5xl px-6 py-8 flex justify-between items-center bg-white dark:bg-primary-300">
      <div className="flex items-center">
        <img className="w-8 mr-2" src={logo} alt="Logo" />

        <h1 className="text-secondary-200 font-bold text-2xl">ReactFacts</h1>
      </div>

      <p
        className="font-normal text-primary-100 dark:text-secondary-100 cursor-pointer"
        onClick={props.toggleDarkMode}
      >
        Toggle {props.darkMode ? "Light" : "Dark"} Mode
      </p>
    </nav>
  );
}
