import React from "react";
import { Modal } from "antd";
import iconPreview from "../../assets/pluginIcon.svg";
const ModalCustom = ({ isOpen, setPreviewOpen,  children }) => {
  return (
    <Modal
      title={
        <div className="flex items-center h-10 gap-x-4">
          <div className="h-full w-[40px] bg-blue-100 p-2 rounded">
            <img src={iconPreview} className="h-full w-full" alt="" />
          </div>
          <p className="text-2xl font-medium">Variables</p>
        </div>
      }
      footer={null}
      open={isOpen}
      onCancel={() => setPreviewOpen(false)}
      centered
      width={700}
    >
      <div className="w-full">{children}</div>
    </Modal>
  );
};

export default ModalCustom;
