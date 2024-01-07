import { library } from "@fortawesome/fontawesome-svg-core";
import Experience from "./components/Experience";
import Sidebar from "./components/Sidebar";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { CVData, DataContext } from "./components/contexts/DataContext";
import { FileUploadButton } from "./components/FileUploadButton";
import { FileDownloadButton } from "./components/FileDownloadButton";
import StickyButtonGroup from "./components/base/StickyButtonGroup";
import PrintButton from "./components/PrintButton";

library.add(fas, fab);

const App = () => {
  let context: CVData = require("./data.json");

  let [data, setData] = useState(context);

  return (
    <div>
      <DataContext.Provider
        value={{
          data,
          setData,
        }}
      >
        <StickyButtonGroup>
          <FileUploadButton />
          <FileDownloadButton />
          <PrintButton />
        </StickyButtonGroup>
        <div className="grid">
          <div className="grid md:grid-cols-6 lg:grid-cols-8">
            <div className="md:col-span-2 p-3 bg-zinc-100">
              <Sidebar />
            </div>
            <div className="p-3 md:col-span-4 lg:col-span-6">
              <Experience />
            </div>
          </div>
        </div>
      </DataContext.Provider>
    </div>
  );
};

export default App;
