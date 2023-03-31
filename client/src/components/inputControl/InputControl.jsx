import style from "./InputControl.module.css";

const InputControl = (props) => {
  return (
    <div className={ style.container }>
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props} />
    </div>
  );
};

export default InputControl;
