import grayReact from "../assets/reactjs-icon-gray.svg";

export default function Main() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 bg-primary-200">
      <header class="mb-8">
        <h1 className="text-white text-5xl font-bold tracking-tighter">
          Fun facts about React
        </h1>
      </header>
      <article className="relative">
        <img
          className="absolute -right-6"
          src={grayReact}
          alt="Transparent React Logo"
        />
        <ul className="list-disc list-inside relative z-10">
          <li className="text-secondary-100 mb-4">
            Was first released in 2013.
          </li>
          <li className="text-secondary-100 mb-4">
            Was originally created by Jordan Walke.
          </li>
          <li className="text-secondary-100 mb-4">
            Has well over 100K stars on Github.
          </li>
          <li className="text-secondary-100 mb-4">Is mantained by Facebook.</li>
          <li className="text-secondary-100">
            Powers thousands of enterprise apps, including mobile apps.
          </li>
        </ul>
      </article>
    </main>
  );
}
