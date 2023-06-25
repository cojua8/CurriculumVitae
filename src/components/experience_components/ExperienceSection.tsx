import ExperienceItem from "./ExperienceItem";
import {
  ExperienceItemProps,
  ExperienceSectionProps,
} from "../contexts/DataContext";
import Icon from "../Icon";

const ExperienceSection = ({ icon, title, items }: ExperienceSectionProps) => {
  return (
    <div className="mb-5 ">
      <div className="flex flex-row text-2xl items-center">
        <Icon name={icon.name} family={icon.family} style={icon.style} />
        <p className="font-bold">{title}</p>
      </div>
      <hr />
      {items.map((item: ExperienceItemProps, index) => {
        return (
          <ExperienceItem
            company={item.company}
            title={item.title}
            dateFrom={item.dateFrom}
            dateTo={item.dateTo}
            activities={item.activities}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ExperienceSection;
