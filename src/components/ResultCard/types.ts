export interface Result {
  questionIndex: number;
  image: string;
  userAnswerIndex: number;
  correctAnswerIndex: number;
  correct: boolean;
}

export interface ResultCardProps {
  score: number;
  total: number;
  answers: Result[];
  onRestart: () => void;
}
