import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useContentOffset = () => {
  const location = useLocation(); // 👈 detect route change

  useEffect(() => {
    const topHeader = document.querySelector(".top-header-wrapper");
    const navbar = document.querySelector(".navbar-sticky-wrapper");

    const updateOffset = () => {
      const headerHeight = topHeader?.offsetHeight || 0;
      const navbarHeight = navbar?.offsetHeight || 0;
      const totalOffset = headerHeight + navbarHeight;

      document
        .querySelectorAll(".content-wrapper, .page-with-nav")
        .forEach((el) => {
          el.style.marginTop = `${totalOffset}px`;
        });
    };

    // Initial run + on route change
    setTimeout(updateOffset, 0); // ensure DOM is ready

    // Observer for header class changes
    const observer = new MutationObserver(updateOffset);
    if (topHeader) {
      observer.observe(topHeader, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    window.addEventListener("resize", updateOffset);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateOffset);
    };
  }, [location]); // 👈 re-run effect when route changes
};

export default useContentOffset;
