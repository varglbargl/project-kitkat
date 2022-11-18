import { Timestamp } from 'firebase/firestore';

type RepeatEvery = {
  duration: number;
  period: string;
  fromCompletion: boolean;
};

class Task {
  title: string;
  readonly createdAt: Timestamp = Timestamp.fromDate(new Date());
  description: string;
  duration: number;
  priority: number;
  repeatEvery?: RepeatEvery;
  tags: string[];

  constructor({ title = 'Untitled Task', description = '', duration = 10, priority = 3, tags = [], repeatEvery}:Task) {
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.priority = priority;
    this.repeatEvery = repeatEvery;
    this.tags = tags;
  }
};

export default Task;
