import css from './Button.module.css';

function Button(props) {
  const btnColor = props.color;
  const btnFontSize = props.text;

  return (
    <button
      className={`${css.button} ${css[btnColor]} ${css[btnFontSize]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
