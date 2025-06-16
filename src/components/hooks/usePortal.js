import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

export const usePortal = (id = "portal-root") => {
  const [mounted, setMounted] = useState(false);

  const container = useMemo(() => {
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("div");
      el.id = id;
      document.body.appendChild(el);
    }
    return el;
  }, [id]);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (container && container.childNodes.length === 0) {
        container.remove();
      }
    };
  }, [container]);

  const Portal = ({ children }) => (mounted ? createPortal(children, container) : null);

  return Portal;
};
