/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.scss';
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'wdio-video-reporter';
