import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SoryBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get("sortBy") || "";

  function onChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      type="white"
      onChange={onChange}
      value={currentValue}
    />
  );
}

export default SoryBy;
