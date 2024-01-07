import React, { useContext } from "react";
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
    <button type="button" onClick={handleFileChange}>
      Descargar
    </button>
  );
};
