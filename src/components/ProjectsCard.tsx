// src/components/ProjectsCard.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { detectOS } from "@/lib/detectOS"; // Asegúrate de tener esta función en lib/detectOs.ts

interface ProjectsCardProps {
  title: string;
  description: string;
  imageSrc: string;
  iosLink?: string;
  androidLink?: string;
}

export default function ProjectsCard({ title, description, imageSrc, iosLink, androidLink }: ProjectsCardProps) {
  const [os, setOs] = useState<string>("");

  useEffect(() => {
    setOs(detectOS());
  }, []);

  const getDownloadLink = () => {
    if (os === "iOS" && iosLink) {
      return <a href={iosLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground">Download for iOS</a>;
    }
    if (os === "Android" && androidLink) {
      return <a href={androidLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground">Download for Android</a>;
    }
    return <p className="text-sm text-muted-foreground">No disponible en tu plataforma</p>;
  };

  return (
    <Card className="rounded-4xl bg-card border border-border shadow-sm hover:bg-muted transition">
      <CardHeader className="flex flex-col items-center text-center">
        <Image src={imageSrc} alt={title} width={60} height={60} />
        <CardTitle className="mt-4 text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="flex gap-2 mt-2">
          {getDownloadLink()}
        </div>
      </CardContent>
    </Card>
  );
}
