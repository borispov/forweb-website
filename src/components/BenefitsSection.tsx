import BenefitsGrid from "@/components/BenefitsGrid";

export default function BenefitsSection() {
  return (
    <div className="container">
      <h1 className="text-7xl">
        אתרים
        חנויות אינטרנטיות
        אפליקציות Web
        שיווק ממומן
      </h1>
      {/* Add The Icons Here */}
      <BenefitsGrid />
    </div>
  )
}