interface IButton {
  text: string;
  maxWidth: string;
  disabled?: boolean;
  handleClick?: () => void;
  type?: 'reset' | 'button' | 'submit' | undefined;
  paddingX?: string;
}

function Button({ text, maxWidth, disabled, handleClick, type, paddingX = '32px' }: IButton) {
  return (
    <button
      type={type || 'submit'}
      onClick={handleClick}
      disabled={disabled}
      style={{ maxWidth, paddingLeft: paddingX, paddingRight: paddingX }}
      className="rounded-lg bg-primary min-h-[45px] w-full hover:bg-primary-hover active:bg-primary-active py-3"
    >
      {text}
    </button>
  );
}

export default Button;
