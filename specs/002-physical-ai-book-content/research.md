# Research: Physical AI Book Content Strategy

**Feature:** 002-physical-ai-book-content

## Content Organization Research

### Chapter Sequencing Decision

**Options:**
1. Topic-based (ROS → Sim → Isaac → VLA)
2. Difficulty-based (Easy → Hard)
3. Project-based (Build robot step-by-step)

**Decision:** Topic-based with progressive difficulty within each chapter

**Rationale:**
- Modular learning (readers can skip familiar topics)
- Clear skill progression in each domain
- Easier to maintain and update
- Mirrors industry career paths

## MDX vs Plain Markdown

**Decision:** MDX (Markdown + JSX components)

**Rationale:**
- Reusable components reduce code duplication
- Interactive elements (collapsible, video embeds)
- Consistent styling across all pages
- Future extensibility (quizzes, sandboxes)

## Code Example Strategy

### Language Distribution
- **Python:** 60% (most accessible, ROS 2 primary)
- **C++:** 25% (performance-critical ROS 2)
- **YAML:** 10% (configs, launch files)
- **Bash:** 5% (setup scripts)

### Example Complexity
- Beginner: Complete, heavily commented
- Intermediate: Key sections explained
- Advanced: Minimal comments, best practices

## Diagram Tools

**Options:**
1. Mermaid (code-based)
2. Draw.io exports
3. Hand-drawn + scanned

**Decision:** Mermaid + optimized PNGs

**Rationale:**
- Mermaid: Version-controlled, consistent style
- PNGs: Complex diagrams, screenshots
- Both render well in light/dark modes

## Content Quality Metrics

### Readability Target
- Flesch Reading Ease: > 60 (Plain English)
- Grade Level: 10-12 (college level acceptable)
- Sentence Length: < 25 words average

### Code Quality
- All examples must compile/run
- Include error handling
- Show expected output
- Provide troubleshooting

## References

- ROS 2 Official Documentation
- NVIDIA Isaac Docs
- OpenVLA Research Papers
- Humanoid Robotics Textbooks
