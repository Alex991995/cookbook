interface IButton {
  text: string;
  maxWidth: string;
  disabled?: boolean;
  handleClick?: () => void;
}

function ButtonSecondary({ text, maxWidth, disabled, handleClick }: IButton) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{ maxWidth }}
      className="rounded-lg border border-primary min-h-[45px] w-full bg-white text-primary py-3 px-8"
    >
      {text}
    </button>
  );
}

export default ButtonSecondary;
