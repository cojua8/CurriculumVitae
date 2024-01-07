import React, { useContext } from "react";
import { DataContext } from "./contexts/DataContext";
import Button from "./base/Button";
import { faFileArrowDown, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrintButton = () => {
  return (
    <Button>
      <button type="button" onClick={window.print}>
        <FontAwesomeIcon icon={faPrint} className="h-6 w-6" />
      </button>
    </Button>
  );
};

export default PrintButton;
