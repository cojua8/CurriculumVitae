import { useContext } from "react";
import { DataContext } from "./contexts/DataContext";
import PersonalData from "./sidebar_components/PersonalData";
import SidebarItem from "./sidebar_components/SidebarItem";

const Sidebar = () => {
  const { data } = useContext(DataContext);
  return (
    <div>
      <p className="text-4xl lg:text-5xl mb-7 font-bold">
        {data.personalData.name}
      </p>
      <PersonalData />

      {data.sidebar.map((item, index) => {
        return <SidebarItem data={item} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;
