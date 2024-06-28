import { Button } from "antd";
import FileSaver from "file-saver";
import { useSelector } from "react-redux";

const ExportJsonElement = () => {
  const {logins} = useSelector((state) => state.logins);

  const handleExport = () => {
    const json = JSON.stringify(logins, null, 2); // Convert state to JSON string
    const blob = new Blob([json], { type: "application/json" });
    FileSaver.saveAs(blob, "login.json");
  };

  return (
    <Button type="primary" onClick={handleExport}>
      Export JSON
    </Button>
  );
};

export default ExportJsonElement;
