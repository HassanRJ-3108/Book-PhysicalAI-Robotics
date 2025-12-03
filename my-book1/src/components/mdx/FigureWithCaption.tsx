import type {ReactNode} from 'react';
import React from 'react';

type Props = {
  src: string;
  alt?: string;
  caption?: string;
};

export default function FigureWithCaption({src, alt, caption}: Props): ReactNode {
  return (
    <figure className="figure-with-caption">
      <img src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

