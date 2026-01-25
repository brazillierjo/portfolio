import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero";
import { FlagshipProjectSection } from "@/components/sections/flagship-project";

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
