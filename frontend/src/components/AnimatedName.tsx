type AnimatedNameProps = {
  children: string;
  className?: string;
};

export const AnimatedName = ({ children, className }: AnimatedNameProps) => {
  return (
    <h1
      className={[
        'mx-auto w-full max-w-[85vw] cursor-default text-[clamp(3.5rem,10vw,12rem)] font-normal leading-[0.95] tracking-[-0.03em]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="sr-only">{children}</span>

      <span
        aria-hidden="true"
        className="redaction-stack inline-grid text-center"
      >
        <span
          className="redaction-layer redaction name-redaction"
          style={{
            fontFamily: 'Redaction',
            fontWeight: 700,
            opacity: 1,
          }}
        >
          {children}
        </span>
      </span>
    </h1>
  );
};