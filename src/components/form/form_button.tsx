type InputButtonProps = {
  className?: string;
  value: string;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
};

const FormButton = ({className = "", value, onClickHandler}: InputButtonProps) => {
  return (
    <div className={`form_button ${className}`}>
      <button onClick={onClickHandler} >
        {value}
      </button>
    </div>
  );
};

export default FormButton;
