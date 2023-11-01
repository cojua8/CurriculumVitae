import React, { ChangeEvent, useContext } from "react";
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

  return <input type="file" onChange={handleFileChange} />;
};
