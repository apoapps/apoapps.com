import Image from "next/image";

// Componente para “apilar” el iPhone y el screenshot
export default function StackedMockup() {
  return (
    <div className="relative w-[300px] h-[600px]">
      {/* Capa 2: Screenshot en posición absoluta */}
      <div className="absolute top-[13px] left-[0px] w-[300px] h-[580px]">
        <Image
          src="/trigo-ss1.jpeg"
          alt="Tri-Go Math Screenshot"
          fill
          className="object-contain rounded-[60px]"
        />
      </div>
      
      {/* Capa 1: iPhone */}
      <Image
        src="/15pro.png" 
        alt="iPhone 15 Pro Mockup"
        fill
        className="object-contain"
      />
    </div>
  );
}
