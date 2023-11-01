import { useContext } from "react";
import { LanguageProps, DataContext } from "../contexts/DataContext";

const Languages = () => {
  const languageData: LanguageProps[] = useContext(DataContext).data.languages;
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
