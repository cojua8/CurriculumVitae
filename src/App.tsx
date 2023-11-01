import { library } from "@fortawesome/fontawesome-svg-core";
import Experience from "./components/Experience";
import Sidebar from "./components/Sidebar";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { CVData, DataContext } from "./components/contexts/DataContext";

library.add(fas, fab);

const App = () => {
  let context: CVData = require("./data.json");

  let [data, setData] = useState(context);

  const handleClick = () => {
    const newData: CVData = require("./data2.json");
    console.log(newData);
    setData(newData);
    console.log(data);
  };
  return (
    <div className="grid">
      <button onClick={handleClick}>Upload data</button>
      <DataContext.Provider
        value={{
          data,
        }}
      >
        <div className="grid md:grid-cols-6 lg:grid-cols-8">
          <div className="md:col-span-2 p-3 bg-zinc-100">
            <Sidebar />
          </div>
          <div className="p-3 md:col-span-4 lg:col-span-6">
            <Experience />
          </div>
        </div>
      </DataContext.Provider>
    </div>
  );
};

export default App;
