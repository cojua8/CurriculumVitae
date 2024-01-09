import { SidebarTextProps } from "../contexts/DataContext";

const SidebarText = ({ text }: SidebarTextProps) => {
  if (typeof text === "string") {
    return <p className="mb-2">{text}</p>;
  } else {
    return (
      <div>
        {text.map((paragraph: string, index) => {
          return (
            <p key={index} className="mb-2">
              {paragraph}
            </p>
          );
        })}
      </div>
    );
  }
};

export default SidebarText;
