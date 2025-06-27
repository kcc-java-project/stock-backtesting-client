type InputButtonProps = {
  className?: string;
  value: string;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
};

const InputButton = ({className = "", value, onClickHandler}: InputButtonProps) => {
  return (
    <div className={`input_button ${className}`}>
      <button onClick={onClickHandler} >
        {value}
      </button>
    </div>
  );
};

export default InputButton;
