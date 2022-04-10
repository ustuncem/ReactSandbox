import React from 'react';
import Navigation from './components/Navigation';
import Main from './components/Hero';
import Card from './components/Card';

import data from './data';

function App() {
  return (
    <>
      <Navigation />
      <main className="max-w-lg mx-auto px-7 my-7">
        <Main />
        <section className="flex flex-nowrap gap-5 overflow-x-auto">
          {data.map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
