import css from './Button.module.css';

function Button(props) {
  const btnColor = props.color;
  console.log(btnColor, typeof btnColor);

  return <button className={`${css.button} ${css.btnColor}`}>{props.children}</button>;
}

export default Button;
