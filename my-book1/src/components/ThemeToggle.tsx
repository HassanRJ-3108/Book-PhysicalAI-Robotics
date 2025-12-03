import type {ReactNode} from 'react';
import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';

export default function ThemeToggle(): ReactNode {
  const {colorMode, setColorMode} = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className={isDark ? 'btn-ghost' : 'btn-primary'}
      onClick={() => setColorMode(isDark ? 'light' : 'dark')}
    >
      {isDark ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  );
}

