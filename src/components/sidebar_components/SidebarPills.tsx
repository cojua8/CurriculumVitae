import { SidebarPillsProps } from "../contexts/DataContext";

interface PillsProps {
  name: string;
}

const Pills = ({ name }: PillsProps) => {
  return <div className="rounded-lg bg-emerald-500 px-2 m-2">{name}</div>;
};

const SidebarPills = ({ items }: SidebarPillsProps) => {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-start">
        {items.map((v: string, index) => {
          return <Pills name={v} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SidebarPills;
