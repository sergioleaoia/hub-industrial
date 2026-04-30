import Image from "next/image";
import Link from "next/link";

export function HubHeader() {
  return (
    <header className="bg-[#0a0c10]">
      <div className="mx-auto flex w-full max-w-6xl items-center px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="Leão IA — página inicial"
        >
          <Image
            src="/leao%20ia%20branca%20pra%20corte.png"
            alt="Leão IA"
            width={1080}
            height={1080}
            priority
            className="h-20 w-20 object-contain sm:h-24 sm:w-24"
          />
        </Link>
      </div>
    </header>
  );
}
