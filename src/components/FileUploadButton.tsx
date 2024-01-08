import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useContext } from "react";
import Button from "./base/Button";
import { DataContext } from "./contexts/DataContext";

export const FileUploadButton = () => {
  const { setData } = useContext(DataContext);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target!.result;
      setData(JSON.parse(text as string));
    };
    reader.readAsText(event.target.files![0]);
  };

  return (
    <Button>
      <input
        type="file"
        id="file-upload"
        onChange={handleFileChange}
        className="hidden"
      />
      <label htmlFor="file-upload">
        <FontAwesomeIcon icon={faFileArrowUp} className="h-6 w-6" />
      </label>
    </Button>
  );
};
