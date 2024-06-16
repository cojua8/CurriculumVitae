import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./App.css";
import Experience from "./components/Experience";
import { FileDownloadButton } from "./components/FileDownloadButton";
import { FileUploadButton } from "./components/FileUploadButton";
import PrintButton from "./components/PrintButton";
import Sidebar from "./components/Sidebar";
import StickyButtonGroup from "./components/base/StickyButtonGroup";
import { CVData, DataContext } from "./components/contexts/DataContext";

library.add(fas, fab);

const App = () => {
  const [data, setData] = useState<CVData | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => setData(data as CVData));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

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
