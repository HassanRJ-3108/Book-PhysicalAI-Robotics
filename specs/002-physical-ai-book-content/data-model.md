# Data Model: Physical AI Book Content

**Feature:** 002-physical-ai-book-content

## MDX Component Props

### AlertBox
```typescript
interface AlertBoxProps {
  type: 'info' | 'warning' | 'success' | 'danger';
  title?: string;
  children: ReactNode;
}
```

### CodeBlock
```typescript
interface CodeBlockProps {
  language: string;
  title?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  children: string;
}
```

### FigureWithCaption
```typescript
interface FigureWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  width?: string | number;
}
```

### VideoEmbed
```typescript
interface VideoEmbedProps {
  videoId: string;  // YouTube video ID
  title: string;
  autoplay?: boolean;
}
```

### CollapsibleSection
```typescript
interface CollapsibleSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}
```

## Content Metadata (Frontmatter)

```yaml
---
sidebar_position: number
title: string
description: string
tags: string[]
keywords: string[]
author: string
last_updated: date
difficulty: 'beginner' | 'intermediate' | 'advanced'
---
```

## Chapter Structure

```typescript
interface Chapter {
  id: string;
  title: string;
  description: string;
  pages: Page[];
  sidebar_position: number;
}

interface Page {
  id: string;
  title: string;
  path: string;
  frontmatter: PageFrontmatter;
  content: string;  // MDX content
  codeExamples: CodeExample[];
  diagrams: Diagram[];
}

interface CodeExample {
  language: 'python' | 'cpp' | 'yaml' | 'bash';
  code: string;
  title?: string;
  explanation: string;
}

interface Diagram {
  type: 'mermaid' | 'image';
  source: string;  // Mermaid code or image path
  caption: string;
  alt: string;
}
```

## No Database
All content is static markdown/MDX files. No database schema needed.
