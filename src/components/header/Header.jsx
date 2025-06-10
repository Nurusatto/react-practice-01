import { useBreakpoint } from "../hooks/useBreakPoint";
import { DescktopHeader } from "./HeaderDesktop/DesktopHeader";
import { MobileHeader } from "./HeaderMobile/MobileHeader";

export const Header = function () {
  const breakpoint = useBreakpoint();

  return (
    <>
      {["desktop", "laptop"].includes(breakpoint) && <DescktopHeader />}
      {["mobile", "tablet"].includes(breakpoint) && <MobileHeader />}
    </>
  );
};
