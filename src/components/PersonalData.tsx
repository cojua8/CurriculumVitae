import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  IconDefinition,
  faCakeCandles,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface PersonalDataProps {
  icon: IconDefinition;
  value: JSX.Element | string;
}

const data: PersonalDataProps[] = [
  { icon: faCakeCandles, value: "22 de octubre de 1992" },
  { icon: faLocationDot, value: "Ñuñoa, Santiago, Chile" },
  {
    icon: faEnvelope,
    value: <a href="mailto: jn.cv@sent.com">jn.cv@sent.com</a>,
  },
  { icon: faGithub, value: <a href="https://github.com/cojua8">cojua8</a> },
  {
    icon: faLinkedin,
    value: <a href="https://www.linkedin.com/in/jneiraj/">jneiraj</a>,
  },
];

const PersonalData = () => {
  return (
    <ul className="list-none">
      {data.map(({ icon: iconName, value }: PersonalDataProps) => {
        return (
          <li className="mt-3">
            <div className="flex flex-row">
              <FontAwesomeIcon className="h-6 w-6 mr-5" icon={iconName} />
              <div>{value}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PersonalData;
