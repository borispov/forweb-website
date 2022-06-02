import ServicesGrid from "@/components/services/ServicesGrid";

export default function ServicesSection() {
  return (
    <div className="container">
      <h1 className="text-5xl">
        אתרים
        חנויות אינטרנטיות
        אפליקציות Web
        שיווק ממומן
      </h1>
      {/* Add The Icons Here */}
      <ServicesGrid />
    </div>
  )
}