"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Database, Shield, Activity, Users, ChevronDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="h-screen flex flex-col justify-center items-center relative rounded-b-3xl">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OncologyChain
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Revolutionizing cancer patient data management with blockchain technology
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={scrollToFeatures}>
            Explore Features <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </section>

      <section id="features" ref={featuresRef} className="py-20 bg-secondary rounded-t-3xl rounded-b-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Database, title: "Secure Data Storage", description: "Encrypted, immutable blockchain storage for patient records" },
              { icon: Shield, title: "Privacy Protection", description: "Advanced access controls and data anonymization" },
              { icon: Activity, title: "Real-time Updates", description: "Instant synchronization of patient data across the network" },
              { icon: Users, title: "Collaborative Care", description: "Seamless sharing of information between healthcare providers" },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-border transition-all duration-300 ease-in-out hover:bg-gray-600 hover:shadow-lg hover:-translate-y-1 rounded-xl"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 mb-4 text-blue-400 transition-transform duration-300 ease-in-out group-hover:scale-110" />
                  <CardTitle className="group">
                    <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      {feature.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-card-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-900 rounded-t-3xl rounded-b-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About OncologyChain</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-center">
            OncologyChain leverages blockchain technology to create a secure, transparent, and efficient ecosystem for managing cancer patient
            data. Our platform ensures data integrity, facilitates collaboration among healthcare providers, and empowers patients with control
            over their medical information.
          </p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-300 rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary rounded-t-3xl rounded-b-3xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-8">
            Interested in implementing OncologyChain in your healthcare facility? Contact us for a demo.
          </p>
          <Button size="lg" className="bg-primary text-foreground transition-colors duration-300 rounded-full">
            Request a Demo
          </Button>
        </div>
      </section>

      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 opacity-10"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
}
