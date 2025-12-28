import type {ReactNode} from 'react';
import React from 'react';

type Step = { title: string; description?: string };
type Props = { steps: Step[] };

export default function LearningPath({steps}: Props): ReactNode {
  return (
    <div className="learning-path">
      {steps.map((s, i) => (
        <div className="learning-step" key={i}>
          <div className="learning-step-title">{s.title}</div>
          {s.description && <div className="learning-step-desc">{s.description}</div>}
          {i < steps.length - 1 && <div className="learning-arrow">→</div>}
        </div>
      ))}
    </div>
  );
}

