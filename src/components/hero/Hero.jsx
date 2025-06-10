import { useBreakpoint } from "@components/hooks/useBreakPoint";

import { DesktopHero } from "@components/hero/HeroDesktop/DesktopHero";
import { HeroTablet } from "@components/hero/HeroTablet/HeroTablet";
import { HeroMobile } from "@components/hero/HeroMobile/HeroMobile";

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
