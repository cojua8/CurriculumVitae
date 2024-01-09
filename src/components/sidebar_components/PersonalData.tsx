import { useContext } from "react";
import Icon from "../Icon";
import {
  DataContext,
  EmailPersonalData,
  IconParams,
  PersonalDataContextProps,
  StringPersonalData,
  UrlPersonalData,
} from "../contexts/DataContext";

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
  const contextData =
    useContext(DataContext).data.personalData.personalDataItems;

  const data: PersonalDataProps[] = contextData.map(
    ({ icon, value }: PersonalDataContextProps) => {
      return { icon: icon, value: setTag(value) };
    }
  );

  return (
    <div className="ml-2 mb-5">
      <ul className="list-none">
        {data.map(({ icon, value }: PersonalDataProps, index) => {
          return (
            <li className="mt-3" key={index}>
              <div className="flex flex-row">
                <Icon
                  name={icon.name}
                  family={icon.family}
                  style={icon.style}
                />
                <div>{value}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PersonalData;
