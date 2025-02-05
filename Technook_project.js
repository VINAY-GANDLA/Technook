import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="app-container">
      {/* White Section */}
      <motion.section
        className="section white-section"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text">White Section</h1>
        <p className="scroll-down">Scroll Down</p>
      </motion.section>

      {/* Black Section */}
      <motion.section
        className="section black-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text">Black Section</h1>
      </motion.section>
    </div>
  );
};

export default App;
