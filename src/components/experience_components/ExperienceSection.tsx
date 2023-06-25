import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExperienceItem, { ExperienceItemProps } from "./ExperienceItem";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ExperienceSectionProps {
  icon: IconDefinition;
  title: string;
  items: ExperienceItemProps[];
}

const ExperienceSection = ({ icon, title, items }: ExperienceSectionProps) => {
  return (
    <div className="mb-5 ">
      <div className="flex flex-row text-2xl items-center">
        <FontAwesomeIcon className="h-6 w-6 mr-2" icon={icon} />
        <p className="font-bold">{title}</p>
      </div>
      <hr />
      {items.map((item: ExperienceItemProps) => {
        return (
          <ExperienceItem
            company={item.company}
            title={item.title}
            dateFrom={item.dateFrom}
            dateTo={item.dateTo}
            activities={item.activities}
          />
        );
      })}
    </div>
  );
};

export type { ExperienceSectionProps };
export default ExperienceSection;
