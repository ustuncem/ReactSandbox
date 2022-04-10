import React from 'react';
import Header from './components/Header';
import Post from './components/Post';

import posts from './data';

function App() {
  return (
    <>
      <Header />
      <main className="py-7 max-w-xl mx-auto px-10">
        {posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </main>
    </>
  );
}

export default App;
