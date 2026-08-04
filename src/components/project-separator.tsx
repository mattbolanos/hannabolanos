function ProjectSeparator({
  color,
  wavy = false,
}: {
  color: string;
  wavy?: boolean;
}) {
  if (wavy) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none relative h-[clamp(3.5rem,7vw,6.5rem)] w-full shrink-0 overflow-hidden"
        data-separator-variant="wave"
      >
        <svg
          aria-hidden="true"
          className="absolute inset-0 size-full overflow-visible"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <path
            d="M-10 60C180 90 320 88 500 61C780 19 955 17 1160 40C1275 53 1370 66 1450 74"
            stroke={color}
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="h-1 w-full shrink-0"
      data-separator-variant="line"
      style={{ backgroundColor: color }}
    />
  );
}

export { ProjectSeparator };
