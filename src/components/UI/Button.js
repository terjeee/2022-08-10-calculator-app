import css from './Button.module.css';

function Button(props) {
  const btnColor = props.color;

  return (
    <button className={`${css.button} ${css[btnColor]}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
