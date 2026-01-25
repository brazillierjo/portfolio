import { setRequestLocale } from "next-intl/server";
import { FlagshipProjectSection } from "@/components/sections/flagship-project";
import { HeroSection } from "@/components/sections/hero";

type Params = { locale: string };

export default async function HomePage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <FlagshipProjectSection />
    </>
  );
}
