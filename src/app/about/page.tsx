"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, MessageSquare, Send, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AboutMeCard() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthDate = new Date(2004, 6, 26);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-background to-muted/50">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Sección de perfil */}
            <div className="relative p-6 md:p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-border/50">
              <motion.div
                initial={{ translateY: 10, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 mb-6 shadow-lg will-change-transform"
              >
                <Image
                  src="/apodaca.jpeg"
                  alt="Alejandro Apodaca Córdova"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ translateY: 10, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="will-change-transform"
              >
                <h1 className="text-2xl font-bold">Alejandro Apodaca Córdova</h1>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge variant="secondary" className="text-sm font-medium">
                    Software Developer
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {age} years
                  </Badge>
                </div>

                <div className="mt-6">
                  <Button asChild variant="default" size="sm" className="shadow-md">
                    <Link
                      href="https://docs.google.com/document/d/1EpRiiUTYgPA0Vl5XLj0DhceHBYDIbF0OdtQxr4ZwRpw/edit?usp=sharing"
                      target="_blank"
                    >
                      <FileText className="w-4 h-4 mr-2" /> Download CV
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Sección de contenido */}
            <div className="col-span-1 md:col-span-2 p-6 md:p-8">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="about">About Me</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <h2 className="text-xl font-semibold mb-3">About me</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      University student in Mechatronics Engineering with a solid background in programming.
                      Self-taught, with experience in science projects and competitions. Passionate about learning and
                      applying new technologies efficiently.
                    </p>

                    <Separator className="my-4" />

                    <h3 className="font-medium mb-2">Achievements</h3>
                    <p className="text-muted-foreground">
                      Developed three successful applications that have helped thousands of students worldwide.
                    </p>

                    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2">
                      <Badge variant="secondary">Mechatronics</Badge>
                      <Badge variant="secondary">Programming</Badge>
                      <Badge variant="secondary">Self-taught</Badge>
                      <Badge variant="secondary">Problem Solver</Badge>
                      <Badge variant="secondary">Innovation</Badge>
                      <Badge variant="secondary">Technology</Badge>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="contact">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid gap-4">
                    <h2 className="text-xl font-semibold mb-3">Get in touch</h2>
                    <p className="text-muted-foreground mb-4">Feel free to reach out through any of these platforms:</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <Button asChild variant="outline" size="sm">
                        <Link href="https://vm.tiktok.com/ZMJwQcnad/" target="_blank">
                          <MessageSquare className="w-4 h-4 mr-2" /> TikTok
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href="https://t.me/alexapo26" target="_blank">
                          <Send className="w-4 h-4 mr-2" /> Telegram
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href="https://www.linkedin.com/in/alejandro-apodaca-cordova-502a2b200/" target="_blank">
                          <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href="https://www.youtube.com/channel/UC-LPXAK9zMiCOCWMZiO23tA" target="_blank">
                          <Youtube className="w-4 h-4 mr-2" /> YouTube
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href="https://www.github.com/apoapps" target="_blank">
                          <Github className="w-4 h-4 mr-2" /> GitHub
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
