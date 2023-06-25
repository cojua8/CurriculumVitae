interface ExperienceActivityProps {
  description: string;
}

const ExperienceActivity = ({ description }: ExperienceActivityProps) => {
  return <div>{description}</div>;
};

export type { ExperienceActivityProps };
export default ExperienceActivity;
