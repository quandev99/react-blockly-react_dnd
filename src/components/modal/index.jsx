import React from "react";
import { Modal } from "antd";
import iconPreview from "../../assets/pluginIcon.svg";
const ModalCustom = ({ isOpen, setPreviewOpen,  children }) => {
  return (
    <Modal
      title={
        <div className="flex items-center h-10 gap-x-4">
          <div className="h-full w-[42px] bg-blue-100 p-2 rounded flex items-center justify-center">
            <span className="text-blue-500 text-[20px] block text-center">{"{x}"}</span>
          </div>
          <p className="text-2xl font-medium">Variables</p>
        </div>
      }
      footer={null}
      open={isOpen}
      onCancel={() => setPreviewOpen(false)}
      centered
      width={600}
    >
      <div className="w-full">{children}</div>
    </Modal>
  );
};

export default ModalCustom;
