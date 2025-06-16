import { useState } from "react";
import { useFloating, offset, flip, shift, size, FloatingPortal } from "@floating-ui/react";

import { Input } from "../Input/Input";
import { BackDrop } from "./BackDrop";
import { DropList } from "./DropList";

export const InputDropList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, refs, strategy } = useFloating({
    placement: "bottom-start",
    middleware: [
      offset(4),
      flip(),
      shift(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      }),
    ],
  });

  const handleInputClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Input ref={refs.setReference} onClick={handleInputClick} />

      {isOpen && (
        <FloatingPortal>
          <BackDrop onClick={handleClose} />
          <div
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              zIndex: 1021,
            }}
          >
            <DropList />
          </div>
        </FloatingPortal>
      )}
    </>
  );
};
