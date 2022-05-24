import * as process from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(process.exec);

export const exec = async (cmd: string, options: process.ExecOptions = {}) => {
  console.log(cmd); // eslint-disable-line

  const { stdout, stderr } = await execPromise(cmd, { ...options, maxBuffer: Infinity });

  if (stderr) {
    console.log(stderr); // eslint-disable-line
  } else {
    console.log(stdout); // eslint-disable-line
  }
};
