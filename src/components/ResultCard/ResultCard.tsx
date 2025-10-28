import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import s from "./ResultCard.module.css";
import type { ResultCardProps } from "./types";
import { useTranslation } from "react-i18next";

const transition: Transition = { duration: 0.5, ease: [0.42, 0, 0.58, 1] };

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition },
};

function ResultCard({ score, total, answers, onRestart }: ResultCardProps) {
  const { t } = useTranslation();
  if (answers.length === 0) return null;

  return (
    <motion.div
      className={s.container}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <h2 className={s.title}>{t("resultCard.title")}</h2>
      <p className={s.subtitle}>{t("resultCard.subtitle", { score, total })}</p>

      <button className={s.restartBtn} onClick={onRestart}>
        {t("resultCard.btn")}
      </button>

      <h3 className={s.sectionTitle}>{t("resultCard.yourAnswers")}</h3>
      <motion.div className={s.cardsWrapper} variants={containerVariants}>
        {answers.map((res) => (
          <motion.div
            key={res.questionIndex}
            variants={cardVariants}
            className={`${s.card} ${res.correct ? s.correct : s.incorrect}`}
          >
            <div className={s.imageBox}>
              <img
                src={res.image}
                alt={t(`quizCard.questions.${res.questionIndex}.question`)}
              />
            </div>
            <p className={s.answer}>
              <strong>{t("resultCard.yourAnswer")}</strong>
              {t(
                `quizCard.questions.${res.questionIndex}.options.${res.userAnswerIndex}`
              )}
            </p>
            {!res.correct && (
              <p className={s.correctAnswer}>
                <strong>{t("resultCard.correctAnswer")}</strong>
                {t(
                  `quizCard.questions.${res.questionIndex}.options.${res.correctAnswerIndex}`
                )}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ResultCard;
