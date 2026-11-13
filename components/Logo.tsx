import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="agello — página inicial">
      <Image src="/agello-mark.png" alt="" aria-hidden="true" width={36} height={34} className="shrink-0 object-contain" />
      <span className="text-[20px] font-semibold tracking-tight text-charcoal">
        agello
      </span>
    </Link>
  );
}
