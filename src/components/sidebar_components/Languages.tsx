import { useContext } from "react";
import { LanguageProps, dataContext } from "../contexts/DataContext";

const Languages = () => {
  const languageData = useContext(dataContext).languages;
  return (
    <ul>
      {languageData.map(({ name, level }: LanguageProps) => {
        return (
          <li>
            {name}: {level}
          </li>
        );
      })}
    </ul>
  );
};

export default Languages;
