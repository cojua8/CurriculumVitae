import { useContext } from "react";
import { LanguageProps, dataContext } from "../contexts/DataContext";

const Languages = () => {
  const languageData: LanguageProps[] = useContext(dataContext).languages;
  return (
    <ul>
      {languageData.map(({ name, level }: LanguageProps, index) => {
        return (
          <li key={index}>
            {name}: {level}
          </li>
        );
      })}
    </ul>
  );
};

export default Languages;
