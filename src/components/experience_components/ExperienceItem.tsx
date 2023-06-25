import { ExperienceActivityProps } from "./ExperienceActivity";

interface ExperienceItemProps {
  title: string;
  company: string;
  dateFrom: string;
  dateTo?: string;
  activities: ExperienceActivityProps[];
}

const ExperienceItem = ({
  company,
  title,
  dateFrom,
  dateTo,
  activities,
}: ExperienceItemProps) => {
  return (
    <div className="pl-3 pb-3 pt-1 hover:bg-zinc-100">
      <p className="text-xs">
        {dateTo ? `${dateFrom} -  ${dateTo}` : dateFrom}
      </p>
      <div className="flex flex-row items-start justify-between">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm">{company}</p>
      </div>
      <ul className="ml-3">
        {activities.map(({ description }: ExperienceActivityProps) => {
          return <li className="text-sm">{description}</li>;
        })}
      </ul>
    </div>
  );
};

export type { ExperienceItemProps };
export default ExperienceItem;
