import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import _ from "lodash";
import * as Blockly from "blockly/core";
import BlocklyJS from "blockly/javascript";
import DarkTheme from "@blockly/theme-dark";
import Theme from "@blockly/theme-modern";
import { updateLoginData } from "../slices/element";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function useBlockly({ initialBlock = null, toolbox }) {
  const wrapperRef = useRef(null);
  const workspaceRef = useRef(null);
  useDeepCompareEffect(() => {
    // Inject the workspace
    workspaceRef.current = Blockly.inject(wrapperRef.current, {
      toolbox: _.cloneDeep(toolbox),
      grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
      trashcan: true,
      horizontalLayout: false,
      collapse: true,
      // theme: DarkTheme,
      theme: Theme,
      move: {
        scrollbars: {
          // horizontal: true,
          // vertical: true,
        },
        drag: true,
        wheel: true,
      },
    });

    if (initialBlock) {
      let block = workspaceRef.current.newBlock(initialBlock.kind);
      block.moveBy(initialBlock.x, initialBlock.y);
      block.initSvg();

      workspaceRef.current.render();
    }
     return () => {
       workspaceRef.current.dispose();
     };
  }, [toolbox, initialBlock]);
  let { id } = useParams()
  const dispatch = useDispatch()
  const exportWorkspaceToJSON = () => {
    const json = Blockly.serialization.workspaces.save(workspaceRef.current);
     const newData = {
       id,
       data: {
         script: {
           container: json,
          //  variables: variable,
         },
       },
     };
    dispatch(updateLoginData(newData));
    return 
    // localStorage.setItem("workspace-state", JSON.stringify(json, null, 2));
    // const jsonString = JSON.stringify(json, null, 2);
    // downloadJSONFile(jsonString, "workspace.json");
  };

  const downloadJSONFile = (content, fileName) => {
    const a = document.createElement("a");
    const file = new Blob([content], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const importWorkspaceFromJSON = (json) => {
    Blockly.serialization.workspaces.load(json, workspaceRef.current);
  };

  return useMemo(
    () => ({
      BlocklyComponent: () => <div ref={wrapperRef} className="blockly" />,
      generate: () => {
        return BlocklyJS.workspaceToCode(workspaceRef.current);
      },
      exportToJSON: exportWorkspaceToJSON,
      importFromJSON: importWorkspaceFromJSON,
      getWorkspaceJSON: function a(){}, // Return the current workspace JSON
    }),
    [] // Include workspaceJSON in the dependency array to update the memoized value when it changes
  );
}
