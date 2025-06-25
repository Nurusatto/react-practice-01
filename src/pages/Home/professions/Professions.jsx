import { useBreakpoint } from "@components/hooks/useBreakPoint";

import { ProfessionsDesktop } from "./ProfessionsDesktop/ProfessionsDesktop";

export const Professions = function () {
  const breakpoint = useBreakpoint();

  return (
    <>
      {["desktop", "laptop", "tablet", "mobile"].includes(
        breakpoint
      ) && <ProfessionsDesktop />}
    </>
  );
};
