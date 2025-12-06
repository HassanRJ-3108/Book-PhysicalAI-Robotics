import type {ReactNode} from 'react';
import React from 'react';

type Props = {
  title?: string;
  children: ReactNode;
  variant?: 'info' | 'warning' | 'tip' | 'example';
};

export default function AlertBox({title, children, variant = 'info'}: Props): ReactNode {
  return (
    <div className={`alertbox alertbox-${variant}`}>
      {title && <div className="alertbox-title">{title}</div>}
      <div className="alertbox-content">{children}</div>
    </div>
  );
}

export function InfoBox(p: Omit<Props, 'variant'>): ReactNode {
  return <AlertBox variant="info" {...p} />;
}
export function WarningBox(p: Omit<Props, 'variant'>): ReactNode {
  return <AlertBox variant="warning" {...p} />;
}
export function TipBox(p: Omit<Props, 'variant'>): ReactNode {
  return <AlertBox variant="tip" {...p} />;
}
export function ExampleBox(p: Omit<Props, 'variant'>): ReactNode {
  return <AlertBox variant="example" {...p} />;
}

