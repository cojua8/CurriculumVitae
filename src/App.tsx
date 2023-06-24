import PersonalData from "./components/PersonalData";
import Profile from "./components/Profile";
import References from "./components/References";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="grid">
      <div className="grid grid-cols-5">
        <div className="col-span-2 bg-zinc-100">
          <p className="text-2xl">Joaquín Neira Jaeger</p>

          <PersonalData />
          <Profile />
          <Skills />
          <References />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
