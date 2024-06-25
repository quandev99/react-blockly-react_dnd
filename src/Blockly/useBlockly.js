import { useEffect, useMemo, useRef } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import _ from "lodash";
import * as Blockly from "blockly/core";
import BlocklyJS from "blockly/javascript";
import DarkTheme from "@blockly/theme-dark";
import Theme from "@blockly/theme-modern";
export default function useBlockly({ initialBlock=null, toolbox }) {
  const wrapperRef = useRef();
  const workspaceRef = useRef();
  useEffect(() => {
    const handleWheelEvent = (event) => {
      // Your event handler code here
    };

    document.addEventListener("wheel", handleWheelEvent, { passive: true });

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);

  // Since the deps are objects, we need to deep compare them
  useDeepCompareEffect(() => {
    // Inject the workspace

    workspaceRef.current = Blockly.inject(wrapperRef.current, {
      // Unfortuntely Blockly mutates the toolbox object when initialising. This
      // means that the dep changes between renders, which in turn means that
      // the workspace is re-injected
      toolbox: _.cloneDeep(toolbox),
      grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
      trashcan: true,
      horizontalLayout: false,
      collapse: true,
      // theme: DarkTheme,
      theme: Theme,
      move: {
        scrollbars: {
          horizontal: true,
          vertical: true,
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
    workspaceRef.current.addChangeListener(handleBlockMove);
    workspaceRef.current.addChangeListener(handleBlockCreate);
    return () => {
      workspaceRef.current.removeChangeListener(handleBlockMove);
      workspaceRef.current.removeChangeListener(handleBlockCreate);
      workspaceRef.current.dispose();
    };
  }, [toolbox, initialBlock]);
  function handleBlockMove(event) {
    if (event.type === Blockly.Events.BLOCK_MOVE) {
      const blockId = event.blockId;
      const newPosition = event.newCoordinate;
      //  console.log("Block moved:", blockId, "New Position:", newPosition);
    }
  }
  function handleBlockCreate(event) {
    if (event.type === Blockly.Events.BLOCK_CREATE) {
      const newBlockId = event.blockId;
      const newBlockType = event.json.type;
      const newPosition = { x: event.json.x, y: event.json.y };
      const extraState = event.json.extraState;

      // console.log(
      //   "New block created:",
      //   newBlockId,
      //   "Type:",
      //   newBlockType,
      //   "Position:",
      //   newPosition,
      //   "Extra state:",
      //   extraState
      // );
    }
  }
  function exportWorkspaceToJSON() {
    const json = Blockly.serialization.workspaces.save(workspaceRef.current);
    const jsonString = JSON.stringify(json, null, 2);
    downloadJSONFile(jsonString, "workspace.json");
  }

  function downloadJSONFile(content, fileName) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
  }
  function importWorkspaceFromJSON(json) {
    Blockly.serialization.workspaces.load(json, workspaceRef.current);
  }
  return useMemo(
    () => ({
      // Return a component to inject the workspace
      BlocklyComponent: () => <div ref={wrapperRef} className="blockly" />,
      // Generate code from the workspace
      generate: () => {
        return BlocklyJS.workspaceToCode(workspaceRef.current);
      },
      exportToJSON: exportWorkspaceToJSON,
      importFromJSON: importWorkspaceFromJSON,
    }),
    []
  );
}
