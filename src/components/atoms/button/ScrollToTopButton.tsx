import { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.scss";

function ScrollToTopButton() {
  const [showScrollToTop, setShowScrollToTop] = useState(false); // Control visibility

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Show button after 200px scroll
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll listener
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  // Scroll the page to the top when clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className={styles.scrollToTopButton}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
