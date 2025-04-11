'use client';

import { useState } from 'react';
import { Button } from '@heroui/button';

export const Counter = ({
  initialCount,
  children,
}: {
  children: React.ReactNode;
  initialCount: number;
}) => {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <Button radius='full' onPress={() => setCount(count + 1)}>
        Count is {count}
      </Button>
      {children}
    </>
  );
};
