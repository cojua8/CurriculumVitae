import {
  SidebarListProps,
  SidebarPillsProps,
  SidebarTextProps,
} from "../contexts/DataContext";
import SidebarList from "./SidebarList";
import SidebarPills from "./SidebarPills";
import SidebarText from "./SidebarText";

interface SidebarItemProps {
  data: SidebarTextProps | SidebarPillsProps | SidebarListProps;
}

const SidebarItem = ({ data }: SidebarItemProps) => {
  console.log(data);
  let itemContent = null;
  if (data.type === "text") {
    itemContent = <SidebarText {...(data as SidebarTextProps)} />;
  } else if (data.type === "pills") {
    itemContent = <SidebarPills {...(data as SidebarPillsProps)} />;
  } else if (data.type === "list") {
    itemContent = <SidebarList {...(data as SidebarListProps)} />;
  }

  return (
    <div className="mb-5 never-split">
      {data.title ? (
        <div className="mb-2">
          <div className="font-bold text-2xl">{data.title}</div>
          <hr />
        </div>
      ) : null}
      <div className="ml-2">{itemContent}</div>
    </div>
  );
};

export default SidebarItem;
