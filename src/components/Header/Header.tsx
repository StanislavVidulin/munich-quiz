import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Header.module.css";
import enFlag from "../../../public/images/flags/en.png";
import deFlag from "../../../public/images/flags/de.png";

function Header() {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const currentLanguage = i18n.language;
  const currentLanguageEn = currentLanguage === "en";
  const alternativeLanguage = currentLanguageEn ? "de" : "en";
  const alternativeFlag = currentLanguageEn ? deFlag : enFlag;
  const alternativeName = currentLanguageEn ? "DE" : "EN";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsLangOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setIsLangOpen(false);
    }, 300);
  };

  const handleButtonClick = () => {
    setIsLangOpen(!isLangOpen);
  };

  const buildLinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(s.link, isActive && s.active);

  return (
    <header className={s.container}>
      <div className={s.wrapper}>
        <nav className={s.nav}>
          <NavLink to="/" className={buildLinkClass}>
            {t("header.home")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className={s.homeIcon}
            >
              <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
            </svg>
          </NavLink>
          <NavLink to="/about" className={buildLinkClass}>
            {t("header.about")}
          </NavLink>
          <div
            className={clsx(s.languageWrapper, isLangOpen && s.open)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className={s.languageBtn} onClick={handleButtonClick}>
              {currentLanguageEn && (
                <img src={enFlag} alt="English" className={s.flag} />
              )}
              {!currentLanguageEn && (
                <img src={deFlag} alt="Deustch" className={s.flag} />
              )}
              {i18n.language.toUpperCase()}
              <span className={s.arrow}></span>
            </button>
            <ul className={s.languageDropdown}>
              <li onClick={() => changeLanguage(alternativeLanguage)}>
                <img
                  src={alternativeFlag}
                  alt={alternativeName}
                  className={s.flag}
                />
                {alternativeName}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;