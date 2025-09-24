import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css"; // make sure you have App.css in the same folder

function App() {
  const [query, setQuery] = useState("");

  const handleAskBino = () => {
    if (!query.trim()) return;
    const encodedQuery = encodeURIComponent(query);
    window.open(`https://wa.me/918762192191?text=${encodedQuery}`, "_blank");
  };

  return (
    <div className="container">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Ask <span className="highlight">Bino</span> 🔍
      </motion.h1>

      <motion.div
        className="card"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <input
          type="text"
          value={query}
          placeholder="Type your question..."
          onChange={(e) => setQuery(e.target.value)}
          className="input"
        />
        <button onClick={handleAskBino} className="button">
          Ask on WhatsApp
        </button>
      </motion.div>

      <motion.p
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Try Bino – a WhatsApp-based search platform that gives you answers instantly 📲
      </motion.p>
    </div>
  );
}

export default App;
