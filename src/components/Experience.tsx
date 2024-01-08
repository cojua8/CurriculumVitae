import { useContext } from "react";
import { DataContext, ExperienceSectionProps } from "./contexts/DataContext";
import ExperienceSection from "./experience_components/ExperienceSection";

const Experience = () => {
  const experience: ExperienceSectionProps[] =
    useContext(DataContext).data.experience;
  return (
    <div>
      {experience.map(
        ({ icon, title, items }: ExperienceSectionProps, index) => {
          return (
            <ExperienceSection
              icon={icon}
              title={title}
              items={items}
              key={index}
            />
          );
        }
      )}
    </div>
  );
};

export default Experience;
