import React, { JSX } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

type ChapterItem = {
  title: string;
  description: string;
  link: string;
  icon: string;
  color: string;
};

const ChapterList: ChapterItem[] = [
  {
    title: '01. Physical AI Fundamentals',
    description: 'Core principles of Embodied Intelligence, perception, action, and the digital-to-physical transition.',
    link: '/docs/chapter-01-physical-ai',
    icon: '🧠',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: '02. ROS 2 Architecture',
    description: 'Master the Robot Operating System: Nodes, Topics, Services, Actions, and DDS middleware.',
    link: '/docs/chapter-02-ros2',
    icon: '🤖',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: '03. Robot Simulation',
    description: 'Safe testing with Gazebo and Unity. Simulating sensors, physics, and environments.',
    link: '/docs/chapter-03-simulation',
    icon: '🌐',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: '04. NVIDIA Isaac Platform',
    description: 'Leverage Isaac Sim, Isaac ROS, and GPU acceleration for next-gen robotics.',
    link: '/docs/chapter-04-nvidia-isaac',
    icon: '⚡',
    color: 'from-green-400 to-lime-500',
  },
  {
    title: '05. Vision-Language-Action',
    description: 'Multimodal AI: Combining vision, language, and action for intelligent agents.',
    link: '/docs/chapter-05-vla',
    icon: '👁️',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: '06. Humanoid Robotics',
    description: 'The grand challenge: Bipedal locomotion, dexterous manipulation, and HRI.',
    link: '/docs/chapter-06-humanoid',
    icon: '🚶',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: '07. Hardware Setup',
    description: 'Building your lab: Workstations, Jetson edge computing, sensors, and actuators.',
    link: '/docs/chapter-07-hardware',
    icon: '🛠️',
    color: 'from-slate-500 to-gray-500',
  },
];

function ChapterCard({ title, description, link, icon, color }: ChapterItem) {
  return (
    <Link to={link} className="card-link">
      <div className="card h-full hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary">
        <div className="card__header">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{icon}</span>
            <h3 className="text-lg font-bold m-0">{title}</h3>
          </div>
        </div>
        <div className="card__body">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {description}
          </p>
        </div>
        <div className="card__footer mt-auto">
          <span className="text-primary font-semibold text-sm flex items-center gap-1 group">
            Start Chapter
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ChapterCards(): JSX.Element {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Book Chapters</h2>
            <p className="text-gray-500 dark:text-gray-400">A complete journey from fundamentals to advanced humanoid robotics.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ChapterList.map((props, idx) => (
            <ChapterCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
