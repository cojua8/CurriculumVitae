import { createContext } from "react";

interface StringPersonalData {
  type: "text";
  value: string;
}

interface EmailPersonalData {
  type: "email";
  value: string;
}

interface UrlPersonalData {
  type: "url";
  value: string;
  showName: string;
}

interface IconParams {
  name: string;
  style?: string | undefined;
  family?: string | undefined;
}

interface LanguageProps {
  name: string;
  level: string;
}

interface PersonalDataContextProps {
  icon: IconParams;
  value: StringPersonalData | EmailPersonalData | UrlPersonalData;
}

interface ExperienceActivityProps {
  description: string;
}

interface ExperienceItemProps {
  title: string;
  company: string;
  dateFrom: string;
  dateTo?: string;
  activities: ExperienceActivityProps[];
}

interface ExperienceSectionProps {
  icon: IconParams;
  title: string;
  items: ExperienceItemProps[];
}

const data = require("../../data.json");
export const dataContext = createContext(data);
export type {
  PersonalDataContextProps,
  StringPersonalData,
  EmailPersonalData,
  UrlPersonalData,
  IconParams,
  LanguageProps,
  ExperienceSectionProps,
  ExperienceItemProps,
  ExperienceActivityProps,
};
