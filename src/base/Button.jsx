const Button = ({ label, onClickBtn }) => {
  return (
    <button className="btn" aria-label={label} onClick={onClickBtn}>
      {label}
    </button>
  );
};

export default Button;
