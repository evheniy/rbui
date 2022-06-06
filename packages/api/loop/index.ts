import { Loop, Run } from './types';

export type { Loop, Run };

const loop: Loop = async (handlers, ...args) => {
  const run: Run = async (index = 0) => {
    const handler = handlers[index];

    if (handler) {
      await handler(...args);

      await run(index + 1);
    }
  };

  await run();
};

export default loop;
