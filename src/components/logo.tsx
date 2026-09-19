import Link from "next/link";

function HBLogo() {
  return (
    <Link
      href="/"
      aria-label="Hanna Bolaños home"
      className="font-display inline-flex size-11 items-center justify-center text-4xl leading-none hover:opacity-60 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      HB
    </Link>
  );
}

export { HBLogo };
