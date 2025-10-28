import { Link } from 'react-router-dom';
import s from './Button.module.css';

function Button({ to, text }: { to: string; text: string }) {
  return (
    <Link to={to} className={s.btn}>
      {text}
    </Link>
  );
}

export default Button;