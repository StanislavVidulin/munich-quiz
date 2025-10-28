import { useState } from "react";
import { useTranslation } from "react-i18next";
import { quizQuestions } from "../../data/quizQuestions";
import deQuestions from "../../i18n/locales/de.json";
import ResultCard from "../ResultCard/ResultCard";
import ProgressBar from "../ProgressBar/ProgressBar";
import s from "./QuizCard.module.css";
import type { Answer } from "./types";

function QuizCard() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const questions =
    currentLanguage === "de" ? deQuestions.quizCard.questions : quizQuestions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleAnswer = (userAnswerIndex: number) => {
    const question = questions[currentIndex];
    const correctAnswerIndex = question.options.indexOf(question.answer);
    const correct = userAnswerIndex === correctAnswerIndex;

    setScore((prev) => prev + (correct ? 1 : 0));
    setAnswers((prev) => [
      ...prev,
      {
        questionIndex: currentIndex,
        image: question.image,
        userAnswerIndex,
        correctAnswerIndex,
        correct,
      },
    ]);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentIndex(0);
    setAnswers([]);
  };

  const finished = currentIndex >= questions.length;

  return (
    <div className={s.quizWrapper}>
      <div className={s.quizInner}>
        {finished ? (
          <ResultCard
            score={score}
            total={questions.length}
            answers={answers}
            onRestart={handleRestart}
          />
        ) : (
          <>
            <ProgressBar
              progress={((currentIndex + 1) / questions.length) * 100}
              current={currentIndex + 1}
              total={questions.length}
            />
            <div className={s.card}>
              {questions[currentIndex].image && (
                <img
                  src={questions[currentIndex].image}
                  alt={questions[currentIndex].question}
                  className={s.image}
                />
              )}
              <div className={s.content}>
                <h2 className={s.questionText}>
                  {questions[currentIndex].question}
                </h2>
                <div className={s.options}>
                  {questions[currentIndex].options.map((option, index) => (
                    <button
                      key={option}
                      className={s.optionBtn}
                      onClick={() => handleAnswer(index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default QuizCard;