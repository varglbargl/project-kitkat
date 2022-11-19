import { Timestamp } from 'firebase/firestore';

type RepeatEvery = {
  duration: number;
  period: string;
  fromCompletion: boolean;
};

type Task = {
  title: string;
  createdAt: Timestamp;
  description: string;
  duration: number;
  priority: number;
  repeatEvery: RepeatEvery;
  tags: string[];
}

export default Task;
