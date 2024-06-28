import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import AppEditor from "./pages/AppEditor";
import MyApp from "./pages/MyApp";
import { getElements } from "./slices/element";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getElements());
  }, [dispatch]);
  // const initialData = [
  //   {
  //     id: "a235t1ZSwRoPOWzZsTxaO",
  //     userId: 89475,
  //     name: "Login",
  //     description: "abc",
  //     version: "1.0.0",
  //     script: {
  //       id: "a235t1ZSwRoPOWzZsTxaO",
  //       container: {
  //         blocks: {
  //           languageVersion: 0,
  //           blocks: [
  //             {
  //               type: "controls_switch_case",
  //               id: "V;Sa{{/+P3Uu}Tb@3]{#",
  //               x: 250,
  //               y: 70,
  //               extraState: {
  //                 casesCount: 1,
  //                 hasDefault: false,
  //               },
  //             },
  //             {
  //               type: "logic_operation",
  //               id: "3OBUozE{VqkPcwQxs/]i",
  //               x: 470,
  //               y: 90,
  //               fields: {
  //                 OP: "AND",
  //               },
  //             },
  //             {
  //               type: "controls_for",
  //               id: "L7@:mSs=ezZMJ.l#E}QW",
  //               x: 390,
  //               y: 190,
  //               fields: {
  //                 VAR: {
  //                   id: "MIO1eXd/p5,t)6m9vIN:",
  //                 },
  //               },
  //               inputs: {
  //                 FROM: {
  //                   block: {
  //                     type: "math_number",
  //                     id: "2s?|YQTX:4Y2GHa!)XE0",
  //                     fields: {
  //                       NUM: 1,
  //                     },
  //                   },
  //                 },
  //                 TO: {
  //                   block: {
  //                     type: "math_number",
  //                     id: "]cJFM_L%-jg)Es7(rnQ5",
  //                     fields: {
  //                       NUM: 10,
  //                     },
  //                   },
  //                 },
  //                 BY: {
  //                   block: {
  //                     type: "math_number",
  //                     id: "T9ZsEB1u4otU(7|[i;mC",
  //                     fields: {
  //                       NUM: 1,
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //             {
  //               type: "is_uid",
  //               id: "tUr_J1`!|dP9JKmS2kK9",
  //               x: 270,
  //               y: 230,
  //             },
  //             {
  //               type: "variables_set",
  //               id: "r,EX%KuI)O7cj;:%r]Xt",
  //               x: 450,
  //               y: 310,
  //               fields: {
  //                 VAR: {
  //                   id: "MIO1eXd/p5,t)6m9vIN:",
  //                 },
  //               },
  //             },
  //           ],
  //         },
  //         variables: [
  //           {
  //             name: "i",
  //             id: "MIO1eXd/p5,t)6m9vIN:",
  //           },
  //         ],
  //       },
  //       variables: [
  //         {
  //           id: "BakCT",
  //           name: "user",
  //           label: "",
  //           value: "nguyenvietquan",
  //           secret: false,
  //         },
  //         {
  //           id: "6JHgY",
  //           name: "pass",
  //           label: "",
  //           value: "13211231231",
  //           secret: false,
  //         },
  //         {
  //           id: "lEEPf",
  //           name: "login",
  //           label: "",
  //           value: "login",
  //           secret: false,
  //         },
  //       ],
  //     },
  //     elements: [
  //       {
  //         id: "Switch1718188247831",
  //         type: "switch",
  //         name: "Switch",
  //         options: {
  //           hideLabel: true,
  //           value: true,
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           isLoading: false,
  //         },
  //       },
  //       {
  //         id: "Input1718076608542",
  //         type: "input",
  //         name: "Input",
  //         options: {
  //           variable: {
  //             id: "BakCT",
  //             name: "user",
  //             label: "",
  //             value: "nguyenvietquan",
  //             secret: false,
  //           },
  //           hideLabel: false,
  //           value: "nguyenvietquan",
  //           placeholder: "Enter User Name",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           maxLength: null,
  //           minLength: null,
  //           disabled: false,
  //           showCount: false,
  //           label: "user",
  //         },
  //       },
  //       {
  //         id: "Input1718077263926",
  //         type: "input",
  //         name: "PassWord",
  //         options: {
  //           hideLabel: false,
  //           value: "123456",
  //           placeholder: "Enter pass ",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           maxLength: null,
  //           minLength: null,
  //           disabled: false,
  //           showCount: false,
  //           variable: { id: null },
  //         },
  //       },
  //       {
  //         id: "Select1718076611308",
  //         type: "select",
  //         name: "Learn",
  //         options: {
  //           hideLabel: false,
  //           value: ["ReactJs"],
  //           options: [
  //             { label: "React", value: "ReactJs", isCheck: true },
  //             { label: "Angular", value: "Angularjs", isCheck: true },
  //           ],
  //           isMultiple: true,
  //           placeholder: "Please select",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           variable: { id: null },
  //         },
  //       },
  //       {
  //         id: "Input1718181953677",
  //         type: "input",
  //         name: "Input",
  //         options: {
  //           hideLabel: false,
  //           value: "asdasdsad asdadasdasdasdasda adsasda asdasda asdasdas",
  //           placeholder: "",
  //           width: null,
  //           height: 300,
  //           labelWidth: 119,
  //           maxLength: null,
  //           minLength: null,
  //           disabled: false,
  //           showCount: false,
  //         },
  //       },
  //     ],
  //     createdAt: "2024-06-25T10:36:07.701Z",
  //     updatedAt: "2024-06-26T02:50:16.167Z",
  //   },
  //   {
  //     id: "HwkddgNUGRh62wwrslZ4F",
  //     userId: 89475,
  //     name: "Login2",
  //     description: "",
  //     version: "1.0.0",
  //     script: {
  //       id: "HwkddgNUGRh62wwrslZ4F",
  //       container: {},
  //       variables: [
  //         {
  //           id: "BakCT",
  //           name: "user",
  //           label: "",
  //           value: "nguyenvietquan",
  //           secret: false,
  //         },
  //         {
  //           id: "6JHgY",
  //           name: "pass",
  //           label: "",
  //           value: "13211231231",
  //           secret: false,
  //         },
  //         {
  //           id: "lEEPf",
  //           name: "login",
  //           label: "",
  //           value: "login",
  //           secret: false,
  //         },
  //       ],
  //     },
  //     elements: [
  //       {
  //         id: "Alert1717472120144",
  //         type: "alert",
  //         name: "Alert",
  //         options: {
  //           hideLabel: true,
  //           title: "Title",
  //           type: "info",
  //           value: "",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           bordered: false,
  //         },
  //       },
  //       {
  //         id: "Input1717466327475",
  //         type: "input",
  //         name: "Email",
  //         options: {
  //           variable: {
  //             id: "BakCT",
  //             name: "user",
  //             label: "",
  //             value: "nguyenvietquan",
  //             secret: false,
  //           },
  //           hideLabel: false,
  //           value: "nguyenvietquan",
  //           placeholder: "",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           maxLength: null,
  //           minLength: null,
  //           disabled: false,
  //           showCount: false,
  //           label: "user",
  //         },
  //       },
  //       {
  //         id: "Select1717468168432",
  //         type: "select",
  //         name: "Select",
  //         options: {
  //           hideLabel: false,
  //           value: ["React"],
  //           options: [
  //             { label: "Javascript", value: "Js", isCheck: false },
  //             { label: "ReactJs", value: "React", isCheck: true },
  //           ],
  //           isMultiple: true,
  //           placeholder: "Please select",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //         },
  //       },
  //       {
  //         id: "CheckBox1717467990425",
  //         type: "checkbox",
  //         name: "CheckBox",
  //         options: {
  //           hideLabel: false,
  //           value: ["value"],
  //           options: [{ label: "label", value: "value", isCheck: true }],
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //         },
  //       },
  //       {
  //         id: "TextArea1717468026191",
  //         type: "textarea",
  //         name: "TextArea",
  //         options: {
  //           hideLabel: false,
  //           value: "",
  //           placeholder: "",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           maxLength: null,
  //           minLength: null,
  //           disabled: false,
  //           showCount: false,
  //         },
  //       },
  //       {
  //         id: "Switch1717467991944",
  //         type: "switch",
  //         name: "Switch",
  //         options: {
  //           hideLabel: true,
  //           value: true,
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           isLoading: false,
  //         },
  //       },
  //     ],
  //     createdAt: "2024-06-25T10:36:07.701Z",
  //     updatedAt: "2024-06-26T02:50:16.167Z",
  //   },
  // ];
  // useEffect(() => {
  //   localStorage.setItem("Logins", JSON.stringify(initialData));
  // }, [initialData]);

  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="app">
          <Route index element={<MyApp />} />
          <Route path=":id" element={<AppEditor />} />
          <Route path="editor" element={<AppEditor />} />
          <Route path="runs" element={<div>Lần chạy</div>} />
          <Route path="mission" element={<div>Nhiệm vụ</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
