import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; 
const initialState = {
  logins: [],
  login: {},
  variable: [],
  selectedElement: {},
  isLoading: false,
  error: "",
};
const findElementById = (login, id) => {
    const element = login?.elements?.find(element => element?.id === id);
    if (!element) {
      return null;
    } 
    return element;
};

const saveToLocalStorage = (logins) => {
  localStorage.setItem("Logins", JSON.stringify(logins));
};

const elementSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getElements: (state) => {
      const localStorageData = JSON.parse(localStorage.getItem("Logins"));
      if (localStorageData && Array.isArray(localStorageData)) {
        state.isLoading = false;
        state.logins = localStorageData;
      } else {
        state.logins = [];
        state.isLoading = true;
      }
    },
    getLoginById: (state, action) => {
      const id = action.payload;
      state.login = state.logins.find((login) => login.id === id) || {};
    },
    getElementById: (state, action) => {
      const { login, id } = action.payload;
      const element = findElementById(login, id);
      if (element) {
        state.selectedElement = element;
      } else {
        state.selectedElement = {};
      }
    },
    addElementToLogin: (state, action) => {
      const { newElement, position } = action.payload;
      state?.login?.elements?.splice(position, 0, newElement);
      // Optionally update the logins array if needed
      const loginIndex = state.logins.findIndex(
        (login) => login?.id === state.login?.id
      );
      console.log("loginIndex", loginIndex);
      if (loginIndex !== -1) {
        state.logins[loginIndex] = state.login;
      }
    },
    moveElementSlice: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const updatedElements = [...state.login.elements];
      const [movedElement] = updatedElements.splice(dragIndex, 1);
      updatedElements.splice(hoverIndex, 0, movedElement);
      state.login.elements = updatedElements;
      // Optionally update the logins array if needed
      const loginIndex = state.logins.findIndex(
        (login) => login.id === state.login.id
      );
      if (loginIndex !== -1) {
        state.logins[loginIndex] = state.login;
        saveToLocalStorage(state.logins);
      }
    },
    deleteElement: (state, action) => {
      const id = action.payload;
      const newElements = state.login.elements.filter((item) => item.id !== id);
      state.login.elements = newElements;
      // Optionally update the logins array if needed
      const loginIndex = state.logins.findIndex(
        (login) => login.id === state.login.id
      );
      if (loginIndex !== -1) {
        state.logins[loginIndex] = state.login;
        // saveToLocalStorage(state.logins);
      }
    },
    copyElement: (state, action) => {
      const { newElement, index } = action.payload;
      const elements = [...state.login.elements];
      if (newElement) {
        elements.splice(index + 1, 0, newElement);
        state.login.elements = elements;
        // Optionally update the logins array if needed
        const loginIndex = state.logins.findIndex(
          (login) => login.id === state.login.id
        );
        if (loginIndex !== -1) {
          state.logins[loginIndex] = state.login;
        }
      }
    },
    setElements: (state, action) => {
      state.login.elements = action.payload;
      // Optionally update the logins array if needed
      const loginIndex = state.logins.findIndex(
        (login) => login.id === state.login.id
      );
      if (loginIndex !== -1) {
        state.logins[loginIndex] = state.login;
      }
    },
    updateElement: (state, action) => {
      const { id, updatedAttributes } = action.payload;
      const index = state.login.elements.findIndex(
        (element) => element.id === id
      );

      if (index !== -1) {
        state.login.elements[index] = {
          ...state.login.elements[index],
          ...updatedAttributes,
        };
        // Optionally update the logins array if needed
        const loginIndex = state.logins.findIndex(
          (login) => login.id === state.login.id
        );
        if (loginIndex !== -1) {
          state.logins[loginIndex] = state.login;
          const element = findElementById(state.login, id);
          if (element) {
            state.selectedElement = element;
          } else {
            state.selectedElement = {};
          }
          // saveToLocalStorage(state.logins);
        }
      }
    },
    saveElement: (state) => {
      saveToLocalStorage(state.logins);
    },
    importElements(state, action) {
      const { logins } = action.payload;
      state.logins(logins || null);
      saveToLocalStorage(logins);
    },
    deleteAllElements(state) {
      state.login = {};
      // saveToLocalStorage([]);
    },
    removeLogin: (state, action) => {
      const id = action.payload;
      state.logins = state.logins.filter((login) => login.id !== id);
      saveToLocalStorage(state.logins);
    },
    updateLoginData: (state, action) => {
      const { id, data } = action.payload;
      const login = state.login;

      // Check if the current login id matches the id in payload
      if (login && login.id === id) {
        Object.keys(data).forEach((key) => {
          // Check if the key is for a nested property
          if (key === "script" && typeof data[key] === "object") {
            // Merge the nested object
            login[key] = {
              ...login[key],
              ...data[key],
            };
          } else {
            // Update the property directly
            login[key] = data[key];
          }
        });
        // Update state.logins to reflect the changes
        const updatedLogins = state.logins.map((item) =>
          item.id === login.id ? { ...item, ...login } : item
        );
        state.logins = updatedLogins;

        // Save updated logins to localStorage
        saveToLocalStorage(updatedLogins);
      }
    },
    importLoginFileJson(state, action) {
      const { login } = action.payload;
     const isLogin = state.logins.find((item) => item.id === login.id);
     if (isLogin) {
       // Thay đổi id của login nếu đã tồn tại
       login.id = uuidv4();
     }
      state.logins = [login, ...state.logins];
      saveToLocalStorage(state.logins);
    },
    addLogin: (state,action) => {
      const id = action.payload;
        const newLogin = {
          id,
          userId: 89475,
          name: "Login",
          description: "",
          version: "1.0.0",
          script: {
            id,
            variables:[]
          },
          elements: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        console.log("newLogin", newLogin);
        state.logins = [newLogin, ...state.logins];
       state.login = state.logins.find((login) => login.id === id) || {};
        saveToLocalStorage(state.logins);
    },
    addVariableByIdLogin : (state, action) => {
      const { loginId, variables } = action.payload;
      const login = state.logins.find((login) => login.id === loginId);
      if (login) {
       login.script.variables = variables;

       state.login = login;
      }
    }
  },
});

export const {
  getElements,
  addElementToLogin,
  moveElementSlice,
  deleteElement,
  copyElement,
  setElements,
  getElementById,
  updateElement,
  saveElement,
  importElements,
  deleteAllElements,
  getLoginById,
  updateLoginData,
  importLoginFileJson,
  removeLogin,
  addLogin,
  addVariableByIdLogin,
} = elementSlice.actions;
export const elementReducer = elementSlice.reducer;

        // Iterate over each key in the data object
        // Object.keys(data).forEach((key) => {
        //   if (key === "script") {
        //     // Nếu cập nhật trong script, cập nhật từng phần tử của script
        //     Object.keys(data.script).forEach((scriptKey) => {
        //       if (
        //         typeof data.script[scriptKey] === "object" &&
        //         !Array.isArray(data.script[scriptKey])
        //       ) {
        //         // Nếu là object (như container hoặc variables), cập nhật từng phần tử
        //         Object.keys(data.script[scriptKey]).forEach((subKey) => {
        //           state.login.script[scriptKey][subKey] =
        //             data.script[scriptKey][subKey];
        //         });
        //       } else {
        //         // Nếu là các thuộc tính khác của script (như description)
        //         state.login.script[scriptKey] = data.script[scriptKey];
        //       }
        //     });
        //   } else {
        //     // Cập nhật các thuộc tính khác của login
        //     state.login[key] = data[key];
        //   }
        // });