import { useBreakpoint } from "@components/hooks/useBreakPoint";

import { ProfessionsDesktop } from "./ProfessionsDesktop/ProfessionsDesktop";
import { ProfessionsTablet } from "./ProfessionsTablet/ProfessionsTablet";

export const Professions = function () {
  const breakpoint = useBreakpoint();

  return (
    <>
      {["desktop", "laptop"].includes(breakpoint) && <ProfessionsDesktop />}
      {["mobile", "tablet"].includes(breakpoint) && <ProfessionsTablet />}
    </>
  );
};
