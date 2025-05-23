import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import styles from "./Navigation.module.scss";
import BookmarkSvg from "../Icons/BookmarkSvg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__container}>
        <div className={styles.navigation__topbar}>
          <a href="/" className={styles.navigation__logo}>
            {!isMenuOpen && (
              <img src="../../images/logo-bookmark.svg" alt="logo" />
            )}
          </a>

          <button
            className={styles.navigation__burger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {!isMenuOpen && (
              <img src={"../../images/icon-hamburger.svg"} alt="menu" />
            )}
          </button>
        </div>

        <div
          className={`${styles.navigation__links} ${
            isMenuOpen ? styles.open : ""
          }`}
        >
          {isMenuOpen && (
            <div className={styles["navigation__links__topbar"]}>
              <a href="/" className={styles.navigation__logo}>
                <BookmarkSvg isLogoWhite />
              </a>
              <button
                className={styles.navigation__burger}
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <img src="../../../images/icon-close.svg" alt="close" />
              </button>
            </div>
          )}

          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>

          <Button variant="red-outline" className={styles.navigation__button}>
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
