import React, { useCallback } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";
const DynamicFormItem = ({ valueOptions, onOptionsChange }) => {
  const valueOptionsData = valueOptions.options.options;
  const [form] = Form.useForm();
  const [optionCount, setOptionCount] = React.useState(0);

  React.useEffect(() => {
    form.setFieldsValue({ options: valueOptionsData });
    setOptionCount(valueOptionsData.length);
  }, [form, valueOptionsData]);

  const handleOptionsChange = (changedValues, allValues) => {
    onOptionsChange(allValues.options);
  };

  const handleCheckboxChange = useCallback(
    (index) => (e) => {
      const { checked } = e.target;
      const updatedOptions = valueOptionsData.map((option, i) => {
        if (i === index) {
          // Create a copy of the option object and modify the isCheck property
          return { ...option, isCheck: checked };
        }
        return option;
      });
      onOptionsChange(updatedOptions);
    },
    [onOptionsChange, valueOptionsData]
  );
        const TYPEINPUT = valueOptions.type;
        const ISMULTIPLE = valueOptions?.options?.isMultiple;
  return (
    <Form
      form={form}
      onValuesChange={handleOptionsChange}
      style={{ maxWidth: 600 }}
      autoComplete="off"
      initialValues={{ options: valueOptionsData }}
    >
      <Form.List name="options">
        {(fields, { add, remove }) => (
          <>
            {fields?.map(({ key, name, ...restField }, index) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Checkbox
                  onChange={handleCheckboxChange(index)}
                  disabled={!ISMULTIPLE && TYPEINPUT === "select" && index >= 1}
                  checked={valueOptionsData[index]?.isCheck || false}
                ></Checkbox>
                <Form.Item {...restField} name={[name, "label"]}>
                  <Input placeholder="Please Input" />
                </Form.Item>
                <Form.Item {...restField} name={[name, "value"]}>
                  <Input placeholder="Please Input" />
                </Form.Item>
                <div className="flex bg-gray-100 h-[30px]">
                  <MinusOutlined
                    className=" bg-gray-100 border-r px-2"
                    onClick={() => {
                      remove(name);
                      setOptionCount(optionCount - 1);
                    }}
                  />
                  <PlusOutlined
                    className=" bg-gray-100 px-2"
                    onClick={() => {
                      add({
                        label: "label" + key,
                        value: "value" + key,
                        isCheck: false,
                      });
                      setOptionCount(optionCount + 1);
                    }}
                  />
                </div>
              </Space>
            ))}
            {optionCount <= 0 && (
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add({
                      label: "label",
                      value: "value",
                      isCheck: false,
                    });
                    setOptionCount(optionCount + 1);
                  }}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Option
                </Button>
              </Form.Item>
            )}
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default DynamicFormItem;
