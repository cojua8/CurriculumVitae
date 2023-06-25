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
  { name: "VS Code" },
  { name: "Visual Studio" },
  { name: "Git" },
  { name: "Jetbrains" },
  { name: "Powershell" },
  { name: "Bash" },
  { name: "Docker" },
];

const Skill = ({ name }: SkillProps) => {
  return <div className="rounded-lg bg-emerald-500 px-2 m-2">{name}</div>;
};

const Skills = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-start">
        {skills.map(({ name }: SkillProps) => {
          return <Skill name={name} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
