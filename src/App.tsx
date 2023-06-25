import Experience from "./components/Experience";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
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
  );
};

export default App;
