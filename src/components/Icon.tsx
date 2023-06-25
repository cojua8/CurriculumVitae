import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconParams } from "./contexts/DataContext";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Icon = ({ name, style, family }: IconParams) => {
  const iconName = `fa-${name}`;
  const iconStyle = style ? `fa-${style}` : "";
  const iconFamily = family ? `fa-${family}` : "";

  return (
    <FontAwesomeIcon
      className="h-6 w-6 mr-5"
      icon={`${iconName} ${iconStyle} ${iconFamily}` as IconProp}
    />
  );
};

export default Icon;
