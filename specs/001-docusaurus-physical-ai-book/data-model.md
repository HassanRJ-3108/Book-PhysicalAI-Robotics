# Data Model: Docusaurus Physical AI Book

**Feature:** 001-docusaurus-physical-ai-book

## Overview

This feature primarily deals with static content and UI components. Data models are minimal since there's no backend or database involved. However, we define TypeScript interfaces for component props and configuration objects.

## Component Interfaces

### TopicCard Props
```typescript
interface TopicCardProps {
  icon: string;          // Emoji or icon identifier
  title: string;         // Card heading
  description: string;   // Brief description (1-2 sentences)
  link: string;          // Navigation path (e.g., "/docs/ros2")
}
```

**Example:**
```typescript
{
  icon: "🤖",
  title: "ROS 2: The Robotic Nervous System",
  description: "Master middleware for robot control with nodes, topics, and services",
  link: "/docs/ros2"
}
```

### ChapterMetadata (Frontmatter)
```yaml
---
sidebar_position: number   # Order in sidebar (1, 2, 3...)
title: string             # Chapter title
description: string       # SEO description
tags: string[]           # Topic tags
---
```

**Example:**
```yaml
---
sidebar_position: 2
title: "ROS 2 Basics"
description: "Introduction to ROS 2 nodes, topics, and services"
tags: ["ros2", "middleware", "robotics"]
---
```

## Configuration Objects

### Docusaurus Config (TypeScript)
```typescript
interface DocusaurusConfig {
  title: string;
  tagline: string;
  url: string;
  baseUrl: string;
  organizationName: string;
  projectName: string;
  
  themeConfig: {
    colorMode: {
      defaultMode: 'light' | 'dark';
      respectPrefersColorScheme: boolean;
    };
    navbar: {
      title: string;
      logo: { src: string; alt: string };
      items: NavbarItem[];
    };
    footer: {
      links: FooterLink[];
      copyright: string;
    };
  };
  
  i18n: {
    defaultLocale: string;
    locales: string[];
    localeConfigs: Record<string, LocaleConfig>;
  };
}
```

### Sidebar Configuration
```typescript
type SidebarItem = 
  | string                    // Simple doc ID
  | {
      type: 'category';
      label: string;
      items: SidebarItem[];
      collapsible?: boolean;
      collapsed?: boolean;
    };

type Sidebars = {
  [sidebarId: string]: SidebarItem[];
};
```

**Example:**
```typescript
{
  docs: [
    'intro',
    {
      type: 'category',
      label: '🤖 ROS 2',
      items: ['ros2/index', 'ros2/nodes', 'ros2/topics'],
      collapsible: true,
      collapsed: false
    }
  ]
}
```

## i18n Translation Files

### UI Translations (JSON)
```json
{
  "theme.navbar.home": string,
  "theme.navbar.docs": string,
  "theme.footer.copyright": string,
  // ... more UI strings
}
```

**Example (Urdu):**
```json
{
  "theme.navbar.home": "ہوم",
  "theme.navbar.docs": "دستاویزات",
  "theme.footer.copyright": "© ۲۰۲۵ حسن آر جے۔ تمام حقوق محفوظ۔"
}
```

## Static Data

### Topic Cards Data
```typescript
const TOPICS: TopicCardProps[] = [
  {
    icon: "🤖",
    title: "ROS 2: The Robotic Nervous System",
    description: "Master middleware for robot control",
    link: "/docs/ros2"
  },
  {
    icon: "🎮",
    title: "Simulation: The Digital Twin",
    description: "Build physics simulations with Gazebo & Unity",
    link: "/docs/simulation"
  },
  // ... 3 more cards
];
```

## No Database Schema

This feature has no database requirements. All content is stored as:
- Markdown files (`docs/**/*.md`)
- React components (`src/components/**/*.tsx`)
- Static assets (`static/img/**`)

## State Management

### Client-Side State
- **Theme:** localStorage key `theme` (values: `light` | `dark`)
- **Language:** localStorage key `docusaurus.locale` (values: `en` | `ur` | `hi`)
- **Search Index:** Generated at build time, stored in static JSON files

No global state management library (Redux/Zustand) needed. Component state handled by React hooks.

## Build Output

### Generated Files Structure
```
build/
├── en/                 # English version
│   ├── index.html
│   ├── docs/
│   └── assets/
├── ur/                 # Urdu version
│   ├── index.html
│   ├── docs/
│   └── assets/
├── hi/                 # Hindi version
│   ├── index.html
│   ├── docs/
│   └── assets/
└── assets/            # Shared assets
    ├── css/
    └── js/
```

---

**Note:** This data model is intentionally minimal as Docusaurus handles most data transformation internally. Custom data structures are limited to component props and configuration objects.
