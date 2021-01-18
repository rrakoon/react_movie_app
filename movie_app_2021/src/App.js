import React from "react";
import Rrakoon from "./Rrakoon";

function App() {
  return (
    <div className="App">
      hi react
      <Rrakoon /> {/* componet안에 다른 componet import가능 */}
    </div>
  );
}

export default App;
