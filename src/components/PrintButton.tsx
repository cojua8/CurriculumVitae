import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./base/Button";

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
