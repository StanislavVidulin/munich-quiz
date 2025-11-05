import { motion, easeOut } from "framer-motion";
import s from "./About.module.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  const animationProps = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay: 0.2, ease: easeOut },
  };

  return (
    <section className={s.container}>
      <motion.h1 className={s.title} {...animationProps}>
        {t("aboutContent.title")}
      </motion.h1>

      <div className={s.contentWrapper}>
        <div className={s.imageBox}>
          <img src="/images/quiztime.jpg" alt="Munich" />
        </div>

        <div className={s.textBox}>
          <motion.p className={s.text} {...animationProps}>
            {t("aboutContent.text")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;
