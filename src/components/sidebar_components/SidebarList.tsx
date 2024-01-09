import { ListProps, SidebarListProps } from "../contexts/DataContext";

const Languages = ({ items }: SidebarListProps) => {
  return (
    <ul>
      {items.map(({ key, value }: ListProps, index) => {
        return (
          <li key={index}>
            {key}: {value}
          </li>
        );
      })}
    </ul>
  );
};

export default Languages;
