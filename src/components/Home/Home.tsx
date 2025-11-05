import Button from "../Button/Button";
import s from "./Home.module.css";
import { textAnimation } from "../styles/animation";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Home() {

  const { t } = useTranslation();

  return (
    <section className={s.homeContent}>
      <div className={s.content}>
        <motion.h1
          className={s.title}
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          {t("homeContent.title")}
        </motion.h1>
        <motion.h2
          className={s.subtitle}
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          {t("homeContent.subTitle")}
        </motion.h2>
        <Button to="/quiz" text={t("homeContent.btn")} />
      </div>
    </section>
  );
}

export default Home;