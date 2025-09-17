interface IButton {
  text: string;
  maxWidth?: string;
  handleClick?: () => void;
}

function ButtonTransparent({ text, maxWidth = 'auto',  handleClick }: IButton) {
  return (
    <button
      onClick={handleClick}
      style={{ maxWidth }}
      className="rounded-lg  min-h-[45px] w-full bg-transparent text-secondary py-3 px-8"
    >
      {text}
    </button>
  );
}

export default ButtonTransparent;
