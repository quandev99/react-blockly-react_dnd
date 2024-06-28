import  { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import ElementMap from "./forms";
import { v4 as uuidv4 } from "uuid";
import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { copyElement, deleteElement, getElementById, moveElementSlice } from "../slices/element";
import { setIsOpen } from "../slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
const DraggableElement = ({
  element,
  index,
}) => {
  const dispatch = useDispatch();
  const { selectedElement,login } = useSelector(
    (state) => state.logins
  );
  const ref = useRef(null);
  const [, drag] = useDrag({
    type: "FORM_ELEMENT",
    item: { index, element },
  });

  const [, drop] = useDrop({
    accept: "FORM_ELEMENT",
    hover: (item, monitor) => {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      dispatch(
        moveElementSlice({ dragIndex, hoverIndex })
      );
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));
  const ElementComponent = ElementMap[element?.type];
  const handleSelect = (event) => {
    event.stopPropagation();
    dispatch(setIsOpen(true));
    dispatch(getElementById({ login, id: element.id }));
    };
    
    const handleDelete = (event, element) => {
      event.stopPropagation();
      dispatch(setIsOpen(false));
      dispatch(deleteElement(element?.id));
      };
      const handleCopy = (event) => {
        event.stopPropagation();
        const newElement = { ...element, id: element.name + uuidv4() };
        dispatch(copyElement({ newElement, index }));
      };
  return (
    <div
      ref={ref}
      className={`form-element ${
        selectedElement?.id === element?.id ? "selected" : ""
      }`}
      onClick={(event) => handleSelect(event)}
    >
      {ElementComponent ? <ElementComponent {...element} /> : null}
      {selectedElement?.id === element?.id && (
        <div className="element-actions">
          <button onClick={(event) => handleCopy(event)}>
            <CopyOutlined />
          </button>
          <button onClick={(event) => handleDelete(event, element)}>
            <DeleteOutlined />
          </button>
        </div>
      )}
    </div>
  );
};

export default DraggableElement;
