import React, { JSX } from 'react';
import Link from '@docusaurus/Link';

const QuickLinkItems = [
  {
    title: '📚 Documentation',
    links: [
      { label: 'Introduction', to: '/docs/intro' },
      { label: 'ROS 2 Installation', to: '/docs/chapter-02-ros2' },
      { label: 'Jetson Setup', to: '/docs/chapter-07-hardware/edge-computing' },
    ]
  },
  {
    title: '🛠️ Tools & Resources',
    links: [
      { label: 'NVIDIA Isaac Sim', to: '/docs/chapter-04-nvidia-isaac/isaac-sim' },
      { label: 'Gazebo Simulator', to: '/docs/chapter-03-simulation/gazebo' },
      { label: 'VLA Models', to: '/docs/chapter-05-vla' },
    ]
  },
  {
    title: '🤝 Community',
    links: [
      { label: 'GitHub Repository', to: 'https://github.com/your-repo' },
      { label: 'Discussion Forum', to: '#' },
      { label: 'Report an Issue', to: '#' },
    ]
  }
];

export default function QuickLinks(): JSX.Element {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span>⚡</span> Quick Links
      </h3>
      <div className="space-y-6">
        {QuickLinkItems.map((section, idx) => (
          <div key={idx}>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {section.title}
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary flex items-center gap-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-primary/10 rounded-lg p-4">
          <h4 className="text-sm font-bold text-primary mb-1">Need Help?</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
            Join our community discord to get help with your robotics projects.
          </p>
          <Link to="#" className="text-xs font-semibold text-primary hover:underline">
            Join Discord →
          </Link>
        </div>
      </div>
    </div>
  );
}
