import { useBreakpoint } from "@components/hooks/useBreakPoint";

import { DesktopHero } from "./HeroDesktop/DesktopHero";
import { HeroTablet } from "./HeroTablet/HeroTablet";
import { HeroMobile } from "./HeroMobile/HeroMobile";

export const Hero = function () {
  const breakpoint = useBreakpoint();

  return (
    <>
      {["desktop", "laptop"].includes(breakpoint) && <DesktopHero />}
      {["tablet"].includes(breakpoint) && <HeroTablet />}
      {["mobile"].includes(breakpoint) && <HeroMobile />}
    </>
  );
};
