import React from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addVariableByIdLogin } from "../../slices/element";
import { v4 as uuidv4 } from "uuid";
import ModalCustom from ".";

const ModalVariables = ({ isOpen, setPreviewOpen }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [optionCount, setOptionCount] = React.useState(0);

  const { login } = useSelector((state) => state.logins);
  const variables = login?.script?.variables;
    React.useEffect(() => {
      form.setFieldsValue({ options: variables });
      setOptionCount(variables?.length || 0);
    }, [form, variables]);
  const handleAddVariable = (allValues) => {
    const updatedVariables = allValues.options.map((option) => {
      const existingVariable = variables?.find(
        (variable) => variable?.name === option?.label
      );
      return {
        id: existingVariable ? existingVariable.id : uuidv4(),
        name: option?.label,
        label: option?.label,
        value: option?.value,
        secret: false,
      };
    });

    dispatch(
      addVariableByIdLogin({
        loginId: login.id,
        variables: updatedVariables,
      })
    );
  };

  return (
    <ModalCustom isOpen={isOpen} setPreviewOpen={setPreviewOpen}>
      <Form
        form={form}
        onValuesChange={(_, allValues) => handleAddVariable(allValues)}
        autoComplete="off"
        initialValues={{ options: variables }}
      >
        <Space style={{ marginBottom: 20 }}>
          <h4>Constant variables</h4>
          <Button>PROFILE_ID</Button>
          <Button>PROFILE_NAME</Button>
        </Space>
        <Form.List name="options" style={{ width: "100%" }}>
          {(fields, { add, remove }) => (
            <>
              {fields?.map(({ key, name, ...restField }, index) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8, width: "100%" }}
                  align="baseline"
                >
                  <Form.Item {...restField} name={[name, "label"]}>
                    <Input placeholder="Name" />
                  </Form.Item>
                  {"="}
                  <Form.Item {...restField} name={[name, "value"]}>
                    <Input placeholder="Value" />
                  </Form.Item>
                  <div className="flex gap-x-2 h-[30px]">
                    <MinusOutlined
                      className=" bg-gray-100 border-r px-2 "
                      onClick={() => {
                        remove(name);
                        setOptionCount(optionCount - 1);
                      }}
                    />
                    <PlusOutlined
                      className=" bg-gray-100 px-2"
                      onClick={() => {
                        add({
                          id: uuidv4(),
                          name: "",
                          label: "",
                          value: "",
                          secret: false,
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
                        id: uuidv4(),
                        name: "",
                        label: "",
                        value: "",
                        secret: false,
                      });
                      setOptionCount(optionCount + 1);
                    }}
                    block
                    icon={<PlusOutlined />}
                  >
                    Create
                  </Button>
                </Form.Item>
              )}
            </>
          )}
        </Form.List>
      </Form>
    </ModalCustom>
  );
};

export default ModalVariables;
