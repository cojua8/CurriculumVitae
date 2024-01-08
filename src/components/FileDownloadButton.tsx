import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import Button from "./base/Button";
import { DataContext } from "./contexts/DataContext";

export const FileDownloadButton = () => {
  const { data } = useContext(DataContext);
  const handleFileChange = () => {
    // dowload the data as a json file
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = "curriculum_vitae_data.json";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Button>
      <button type="button" onClick={handleFileChange}>
        <FontAwesomeIcon icon={faFileArrowDown} className="h-6 w-6" />
      </button>
    </Button>
  );
};
