function ProjectSeparator({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      className="h-1 w-full shrink-0"
      style={{ backgroundColor: color }}
    />
  );
}

export { ProjectSeparator };
