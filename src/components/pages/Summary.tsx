import { schedule } from 'initFirebase';
import { useState } from 'react';
import { IonAccordionGroup, IonCard } from '@ionic/react';
import { getDoc, getDocs, query, where, orderBy } from 'firebase/firestore';
import { Query, QuerySnapshot, QueryDocumentSnapshot, DocumentSnapshot, DocumentData } from 'firebase/firestore';

import TaskCard from 'components/TaskCard';
import { Task } from 'classes';

let gotDefaultTasks = false;

export default function Summary() {
  const [currentTasks, setTasks] = useState<Task[]>([]);

  const getSchedule = async (): Promise<Task[]> => {
    const q: Query = query(schedule, where('deadline', '<', (new Date())), orderBy('deadline'));
    const docs: QuerySnapshot = await getDocs(q);
    const promiseList: Promise<DocumentSnapshot>[] = [];

    docs.forEach((entry: QueryDocumentSnapshot) => {
      const entryData: DocumentData = entry.data();
      const taskPromise: Promise<DocumentSnapshot> = getDoc(entryData.task);

      promiseList.push(taskPromise);
    });

    const resolvedList: DocumentSnapshot[] = await Promise.all(promiseList);
    const taskList: Task[] = resolvedList.map((task: DocumentSnapshot) => {
      return task.data() as Task;
    });

    gotDefaultTasks = true;

    console.log(taskList.length);

    return taskList;
  };

  const refreshSchedule = () => {
    if (gotDefaultTasks) {
      gotDefaultTasks = false;
      setTasks([]);
    }

    getSchedule()
      .then(setTasks)
      .catch((err: Error) => {
        console.error(err.message);
      });
  };

  if (!gotDefaultTasks) refreshSchedule();

  return (
    <IonCard>
      { !gotDefaultTasks && <span>Loading...</span>}
      { gotDefaultTasks &&
        <IonAccordionGroup>
        { currentTasks.map((task: Task, i: number) => {
          return (
            <TaskCard
              key={ i }
              listId={ 'Task-' + i }
              task={ task }
            />
          );
        }) }
        </IonAccordionGroup>
      }
      { gotDefaultTasks && currentTasks.length === 0 &&
        <span>All caught up!</span>
      }
    </IonCard>
  );
};