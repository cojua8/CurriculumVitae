import { useContext } from "react";
import { ExperienceSectionProps, dataContext } from "./contexts/DataContext";
import ExperienceSection from "./experience_components/ExperienceSection";

const Experience = () => {
  const experience: ExperienceSectionProps[] =
    useContext(dataContext).experience;
  return (
    <div>
      {experience.map(({ icon, title, items }: ExperienceSectionProps) => {
        return <ExperienceSection icon={icon} title={title} items={items} />;
      })}
    </div>
  );
};

export default Experience;
