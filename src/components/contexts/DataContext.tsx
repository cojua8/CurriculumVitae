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

interface ListProps {
  key: string;
  value: string;
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

interface SidebarTextProps {
  type: "text";
  title: string;
  text: string | string[];
}
interface SidebarPillsProps {
  type: "pills";
  title: string;
  items: string[];
}
interface SidebarListProps {
  type: "list";
  title: string;
  items: ListProps[];
}

interface CVData {
  personalData: {
    name: string;
    personalDataItems: PersonalDataContextProps[];
  };
  sidebar: (SidebarTextProps | SidebarPillsProps | SidebarListProps)[];
  experience: ExperienceSectionProps[];
}

export const DataContext = createContext(
  {} as { data: CVData; setData: (data: CVData) => void }
);

export type {
  CVData,
  EmailPersonalData,
  ExperienceActivityProps,
  ExperienceItemProps,
  ExperienceSectionProps,
  IconParams,
  ListProps,
  PersonalDataContextProps,
  SidebarListProps,
  SidebarPillsProps,
  SidebarTextProps,
  StringPersonalData,
  UrlPersonalData,
};
