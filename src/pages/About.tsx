import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '10K+', label: 'Active Students' },
    { number: '500+', label: 'Expert Instructors' },
    { number: '1000+', label: 'Courses Available' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900">About MentaMind</h1>
            <p className="mt-4 text-xl text-gray-600">
              Transforming Education Through Innovation
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                At MentaMind, we believe in the power of education to transform lives. Our mission is to
                make high-quality education accessible to everyone, everywhere. Through innovative
                technology and expert-led instruction, we're building a future where learning knows no
                boundaries.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="mt-2 text-gray-600">
                We strive for excellence in everything we do, from course content to student support.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="mt-2 text-gray-600">
                We embrace new technologies and methods to provide the best learning experience.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="mt-2 text-gray-600">
                We foster a supportive community where learners can grow together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}