import { useContext } from "react";
import Languages from "./sidebar_components/Languages";
import PersonalData from "./sidebar_components/PersonalData";
import Profile from "./sidebar_components/Profile";
import SidebarItem from "./sidebar_components/SidebarItem";
import Skills from "./sidebar_components/Skills";
import { DataContext } from "./contexts/DataContext";

const Sidebar = () => {
  const name: string = useContext(DataContext).data.personalData.name;
  return (
    <div>
      <p className="text-4xl lg:text-5xl mb-7 font-bold">{name}</p>

      <SidebarItem>
        <PersonalData />
      </SidebarItem>
      <SidebarItem title="Perfil">
        <Profile />
      </SidebarItem>

      <SidebarItem title="Competencias">
        <Skills />
      </SidebarItem>
      <SidebarItem title="Idiomas">
        <Languages />
      </SidebarItem>
    </div>
  );
};

export default Sidebar;
