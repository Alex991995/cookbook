interface ILogo {
  fontSize: string;
  width: string;
}

function Logo({ fontSize, width }: ILogo) {
  return (
    <div style={{ fontSize, width, fontWeight: 700 }}>
      Feed<span className="text-primary">Me</span>
    </div>
  );
}

export default Logo;
