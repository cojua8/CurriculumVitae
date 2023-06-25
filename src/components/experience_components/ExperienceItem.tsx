import {
  ExperienceActivityProps,
  ExperienceItemProps,
} from "../contexts/DataContext";

const ExperienceItem = ({
  company,
  title,
  dateFrom,
  dateTo,
  activities,
}: ExperienceItemProps) => {
  return (
    <div className="pl-3 pb-3 pt-1 hover:bg-zinc-100">
      <div className="flex flex-row items-center justify-between text-[11px] mb:text-xs mb-[-5px]">
        <p>{dateTo ? `${dateFrom} -  ${dateTo}` : dateFrom}</p>
        <p>{company}</p>
      </div>
      <p className="text-xl font-semibold">{title}</p>
      <ul className="ml-3">
        {activities.map(({ description }: ExperienceActivityProps, index) => {
          return (
            <li className="text-sm" key={index}>
              {description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceItem;
