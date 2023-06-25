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
      <p className="flex flex-row items-center justify-between text-[10px] mb-[-5px]">
        <p>{dateTo ? `${dateFrom} -  ${dateTo}` : dateFrom}</p>
        <p>{company}</p>
      </p>
      <p className="text-xl font-semibold">{title}</p>
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
