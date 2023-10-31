import { useContext } from "react";
import {
  EmailPersonalData,
  IconParams,
  PersonalDataContextProps,
  StringPersonalData,
  UrlPersonalData,
  dataContext,
} from "../contexts/DataContext";
import Icon from "../Icon";

interface PersonalDataProps {
  icon: IconParams;
  value: JSX.Element | string;
}

function setTag(
  data: StringPersonalData | EmailPersonalData | UrlPersonalData
) {
  if (data.type === "text") {
    return data.value;
  } else if (data.type === "email") {
    return <a href="mailto: {v.value}">{data.value}</a>;
  } else if (data.type === "url") {
    return <a href={data.value}>{data.showName}</a>;
  }
  throw new Error("Unknown personal data type");
}

const PersonalData = () => {
  const contextData = useContext(dataContext).personalData.personalDataItems;

  const data: PersonalDataProps[] = contextData.map(
    ({ icon, value }: PersonalDataContextProps) => {
      return { icon: icon, value: setTag(value) };
    }
  );

  return (
    <ul className="list-none">
      {data.map(({ icon, value }: PersonalDataProps, index) => {
        return (
          <li className="mt-3" key={index}>
            <div className="flex flex-row">
              <Icon name={icon.name} family={icon.family} style={icon.style} />
              <div>{value}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PersonalData;
