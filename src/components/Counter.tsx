'use client';

// Lib Imports.
import { useState } from 'react';

// Components.
import { Lead } from './ui/typography';
import { Button } from './ui/button';

// Component.
export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter((counter) => ++counter);

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <Lead>You have clicked {counter} times!</Lead>

      <Button variant="gradiant" onClick={handleClick}>
        Click me
      </Button>
    </div>
  );
}
