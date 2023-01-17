import React from "react";

function Home({ color, username, city }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        Muna is a Web Developer from Nairobi
      </h1>
    </div>
  );
}

export default Home;
