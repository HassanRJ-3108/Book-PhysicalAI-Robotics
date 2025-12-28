# Quick Start: Physical AI Book Content Development

**Feature:** 002-physical-ai-book-content  
**Prerequisites:** Docusaurus setup complete (Feature 001)

## Content Structure

```
docs/
├── intro.md
├── ros2/
│   ├── index.md
│   ├── installation.md
│   ├── nodes-basics.md
│   └── ... (12 files)
├── simulation/
│   └── ... (8 files)
├── nvidia-isaac/
│   └── ... (10 files)
├── vla-models/
│   └── ... (5 files)
├── humanoid-robotics/
│   └── ... (4 files)
└── hardware/
    └... (3 files)
```

## Writing Content

### Basic Page Template
```markdown
---
sidebar_position: 1
title: "Page Title"
description: "SEO description"
---

# Page Title

Introduction paragraph...

## Section 1

Content...

### Subsection

More content...
```

### Using MDX Components

#### AlertBox
```mdx
<AlertBox type="warning">
This is a warning message!
</AlertBox>
```

#### Code Block
````markdown
```python title="node_example.py"
import rclpy
from rclpy.node import Node

class MyNode(Node):
    def __init__(self):
        super().__init__('my_node')
```
````

####Figure with Caption
```mdx
<FigureWithCaption
  src="/img/diagram.png"
  alt="ROS 2 Architecture"
  caption="Figure 1: ROS 2 system architecture"
/>
```

#### Video Embed
```mdx
<VideoEmbed videoId="ABC123XYZ" title="ROS 2 Tutorial" />
```

## Content Guidelines

### Technical Accuracy
- Test all code examples before publishing
- Verify commands on target platforms (Ubuntu, Windows WSL)
- Include version numbers for dependencies

### Readability
- Use plain English (avoid jargon where possible)
- Define technical terms on first use
- Keep sentences concise (< 25 words)
- Use active voice

### Code Examples
- Always include explanation
- Add comments in code
- Show expected output
- Provide error handling

## Testing Content

### Local Preview
```bash
npm start
# Navigate to chapter being written
```

### Code Example Testing
```bash
# Create test directory
mkdir ~/test-examples
cd ~/test-examples

# Copy and test code from page
# Verify it works as documented
```

## Common Tasks

### Add New Page
1. Create markdown file in appropriate folder
2. Add frontmatter with sidebar_position
3. Write content using MDX components
4. Update sidebars.ts if needed
5. Test in dev server

### Add Diagram
1. Create Mermaid diagram or image
2. Place image in static/img if needed
3. Use FigureWithCaption component
4. Add descriptive alt text
5. Verify rendering

### Cross-Reference
```markdown
See [ROS 2 Installation](../ros2/installation.md) for setup instructions.
```

## Troubleshooting

**Issue:** MDX component not rendering
**Solution:** Check import statement, verify component exists in src/components

**Issue:** Code block no syntax highlighting
**Solution:** Specify language after backticks (```python, ```cpp, etc.)

**Issue:** Image not loading
**Solution:** Verify path is correct (relative to static/ folder)
