import type {ReactNode} from 'react';
import React from 'react';
import BaseCodeBlock from '@theme/CodeBlock';

type Props = {
  language?: string;
  title?: string;
  children: string;
};

export default function CodeBlock({language, title, children}: Props): ReactNode {
  return (
    <div className="codeblock-wrapper">
      {title && <div className="codeblock-title">{title}</div>}
      <BaseCodeBlock language={language}>{children}</BaseCodeBlock>
    </div>
  );
}

