const Button = ({ text, func, prop }) => {
  return (
    <button type="button" className={`btn btn-${prop}`} onClick={func}>
      {text}
    </button>
  );
};

export default Button;
