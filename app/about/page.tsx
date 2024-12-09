"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const bandMembers = [
  {
    name: "Alex Rivers",
    role: "Lead Vocals",
    bio: "The powerhouse voice that drives Stage Fright's signature sound.",
    image: "https://images.unsplash.com/photo-1570499911518-9b95b0611ef3?w=500&h=500&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Lead Guitar",
    bio: "A virtuoso guitarist whose riffs define our unique style.",
    image: "https://images.unsplash.com/photo-1565035010268-a3816f98589a?w=500&h=500&fit=crop"
  },
  {
    name: "Marcus Thompson",
    role: "Bass",
    bio: "The groove master keeping our sound tight and heavy.",
    image: "https://images.unsplash.com/photo-1509973385458-f9609c21b528?w=500&h=500&fit=crop"
  },
  {
    name: "Diana Rodriguez",
    role: "Drums",
    bio: "Our rhythm queen who brings the thunder to every performance.",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500&h=500&fit=crop"
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Band Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-center mb-12">Our Story</h1>
          <div className="prose prose-invert mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              Formed in the underground music scene of 2019, Stage Fright emerged from late-night jam sessions 
              and a shared vision for creating music that pushes boundaries. What started as a collective of 
              passionate musicians quickly evolved into one of the most talked-about new acts in the scene.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Band Members Section */}
      <section className="py-20 bg-black" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Meet the Band</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bandMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-red-500 mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}