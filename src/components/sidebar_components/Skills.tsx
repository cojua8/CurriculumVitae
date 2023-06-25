import { useContext } from "react";
import { dataContext } from "../contexts/DataContext";

interface SkillProps {
  name: string;
}

const Skill = ({ name }: SkillProps) => {
  return <div className="rounded-lg bg-emerald-500 px-2 m-2">{name}</div>;
};

const Skills = () => {
  const skillData: string[] = useContext(dataContext).skills;
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-start">
        {skillData.map((v: string, index) => {
          return <Skill name={v} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
