import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Users, Trophy, ArrowRight } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Personalized Learning",
      description: "Adaptive learning paths tailored to your needs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Support",
      description: "Join a thriving community of learners"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Certification",
      description: "Earn recognized certificates upon completion"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Transform Your Mind,
                <span className="text-blue-600"> Shape Your Future</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Unlock your potential with our expert-led courses and personalized learning paths.
                Join thousands of successful learners today.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  View Courses
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Choose MentaMind?</h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide the tools and support you need to succeed in your learning journey
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white">Ready to Start Your Journey?</h2>
            <p className="mt-4 text-lg text-blue-100">
              Join thousands of learners who have already transformed their lives with MentaMind
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              Enroll Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}