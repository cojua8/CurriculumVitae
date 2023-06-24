interface SkillProps {
  name: string;
}

const skills: SkillProps[] = [
  { name: "Python" },
  { name: "C#" },
  { name: "HTML" },
  { name: "Javascript" },
  { name: "Visual Basic" },
  { name: "Julia" },
  { name: "MATLAB" },
];

const Skill = ({ name }: SkillProps) => {
  return <div className="rounded-lg mx-4">{name}</div>;
};

const Skills = () => {
  return (
    <div>
      <div>Skills</div>
      <div className="flex flex-row flex-wrap">
        {skills.map(({ name }: SkillProps) => {
          return <Skill name={name} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
