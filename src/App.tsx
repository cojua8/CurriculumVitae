import Experience from "./components/Experience";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="grid">
      <div className="grid grid-cols-8">
        <div className="col-span-2 p-3 bg-zinc-100">
          <Sidebar />
        </div>
        <div className="col-span-6 p-3">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default App;
