import ServicesGrid from "@/components/services/ServicesGrid";

export default function ServicesSection() {
  return (
    <div className="noise-bg px-40 pb-32">
      <h1 className="text-5xl pt-20 max-w-md text-center">
        מה אנחנו מגישים?
      </h1>
      {/* Add The Icons Here */}
      <ServicesGrid />
    </div>
  )
}