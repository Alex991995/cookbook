interface ILogo {
  fontSize: string;
  width: string;
  color: string;
}

function Logo({ fontSize, width, color }: ILogo) {
  return (
    <div style={{ fontSize, width, fontWeight: 700, color }}>
      Feed<span className="text-primary">Me</span>
    </div>
  );
}

export default Logo;
