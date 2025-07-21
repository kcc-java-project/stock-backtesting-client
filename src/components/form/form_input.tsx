type FormInputProps = {
  className?: string;
  type?: "text" | "password" | "email";
  name: string;
  value: string;
  onChange: React.ChangeEventHandler;
  placeholder?: string;
  children?: React.ReactNode;
};

const FormInput = ({type = "text", className = "", name, value, onChange, placeholder, children}: FormInputProps) => {
  return (
    <div className={`form_input ${className}`}>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} spellCheck="false" />
      {children}
    </div>
  );
};

export default FormInput;
