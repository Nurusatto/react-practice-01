import { useBreakpoint } from "@components/hooks/useBreakPoint";

import { ProfessionsDesktop } from "./ProfessionsDesktop/ProfessionsDesktop";
import { ProfessionsTablet } from "./ProfessionsTablet/ProfessionsTablet";

export const Professions = function () {
  const breakpoint = useBreakpoint();

  return (
    <>
      {["desktop", "laptop", "tablet"].includes(breakpoint) && <ProfessionsDesktop />}
      {["mobile"].includes(breakpoint) && <ProfessionsTablet />}
    </>
  );
};
