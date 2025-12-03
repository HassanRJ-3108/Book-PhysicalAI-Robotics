import type {ReactNode} from 'react';
import React from 'react';

type Props = {
  title: string;
  description?: string;
  href: string;
};

export default function ResourceCard({title, description, href}: Props): ReactNode {
  return (
    <a className="resource-card" href={href} target="_blank" rel="noreferrer">
      <div className="resource-title">{title}</div>
      {description && <div className="resource-desc">{description}</div>}
    </a>
  );
}

