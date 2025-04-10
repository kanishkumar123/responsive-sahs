import { useEffect } from "react";

const useContentOffset = () => {
  useEffect(() => {
    const topHeader = document.querySelector(".top-header-wrapper");
    const navbar = document.querySelector(".navbar-sticky-wrapper");
    const contentWrappers = document.querySelectorAll(
      ".content-wrapper, .page-with-nav"
    );

    const updateOffset = () => {
      const headerHeight = topHeader?.offsetHeight || 0;
      const navbarHeight = navbar?.offsetHeight || 0;
      const totalOffset = headerHeight + navbarHeight;

      contentWrappers.forEach((el) => {
        el.style.marginTop = `${totalOffset}px`;
      });
    };

    // Initial run
    updateOffset();

    // Observe top header class changes
    const observer = new MutationObserver(updateOffset);
    if (topHeader) {
      observer.observe(topHeader, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    // Update on window resize
    window.addEventListener("resize", updateOffset);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateOffset);
    };
  }, []);
};

export default useContentOffset;
