import type {ReactNode} from 'react';
import React from 'react';

type Props = {
  src: string; // e.g., YouTube embed URL
  title?: string;
};

export default function VideoEmbed({src, title}: Props): ReactNode {
  return (
    <div className="video-embed">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

