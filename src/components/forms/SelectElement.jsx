// import { Form, Select } from "antd";
// import React, { useEffect, useState } from "react";

// const { Option } = Select;

// const SelectElement = ({ id, name, type, options }) => {
//   const [defaultValue, setDefaultValue] = useState([]);

//   // Function to get checked values from options
//   const getCheckedValues = (options) => {
//     return (
//       options
//         ?.filter((option) => option.isCheck)
//         ?.map((option) => option.value) || []
//     );
//   };

//   useEffect(() => {
//     setDefaultValue(getCheckedValues(options?.options));
//   }, [options?.options]);

//   console.log("options?.isMultiple", options?.isMultiple);
//   console.log("defaultValue", defaultValue);
//   console.log("options?.options", options?.options);

//   return (
//     <Form.Item label={!options?.hideLabel ? name : ""}>
//       <Select
//         mode={options?.isMultiple ? "multiple" : undefined}
//         allowClear
//         placeholder={options?.placeholder || "Please select"}
//         value={defaultValue}
//         onChange={(value) => setDefaultValue(value)}
//       >
//         {options?.options?.map((opt) => (
//           <Option key={opt.value} value={opt.value}>
//             {opt.label}
//           </Option>
//         ))}
//       </Select>
//     </Form.Item>
//   );
// };

// export default SelectElement;

import { Form, Select } from "antd";
const SelectElement = ( { id, name, type, options } ) => {
  return (
    <Form.Item label={!options?.hideLabel ? name : ""}>
      <Select
        mode={options?.isMultiple ? "multiple" : undefined}
        allowClear
        placeholder={options?.placeholder || "Please select"}
        options={options?.options}
        value={options?.value || null}
      ></Select>
    </Form.Item>
  );
};

export default SelectElement;
