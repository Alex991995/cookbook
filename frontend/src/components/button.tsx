interface IButton {
  text: string;
  maxWidth: string;
  disabled?: boolean;
  handleClick?: () => void;
  type?: 'reset' | 'button' | 'submit' | undefined;
}

function Button({ text, maxWidth, disabled, handleClick, type }: IButton) {
  return (
    <button
      type={type || 'submit'}
      onClick={handleClick}
      disabled={disabled}
      style={{ maxWidth }}
      className="rounded-lg bg-primary min-h-[45px] w-full hover:bg-primary-hover active:bg-primary-active py-3 px-8"
    >
      {text}
    </button>
  );
}

export default Button;
