import BrowseItems from "@/components/browse-items";
import Header from "@/components/header";
import Hero from "@/components/hero";
import MaxWContainer from "@/components/max-w-container";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* hero */}
      <Hero />
      <MaxWContainer>
        {/* browse the items*/}
        <BrowseItems />
      </MaxWContainer>
    </div>
  );
}
