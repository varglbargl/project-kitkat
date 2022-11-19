import { ReactChildren } from 'types';
import { Task } from 'classes';

import { IonAccordion, IonChip, IonCol, IonIcon, IonItem, IonLabel, IonRow, IonGrid } from '@ionic/react';
import { warningOutline, stopwatchOutline, refreshCircleOutline, pricetagsOutline } from 'ionicons/icons';

import './TaskCard.css';

interface Props {
  children?: ReactChildren;
  task: Task;
  listId: string;
}

export default function TaskCard( { children, task, listId }: Props ) {
  return (
    <IonAccordion value={ listId } className="task-card">
      <IonItem slot="header" color="primary">
        <IonLabel>{ task.title }</IonLabel>
      </IonItem>
      <IonGrid slot="content" className="ion-padding-vertical">
        <IonRow className="ion-justify-content-between ion-padding-horizontal">
          <IonCol size="auto">
            <IonIcon icon={ warningOutline } />
            <IonLabel>
              P{ task.priority }
            </IonLabel>
          </IonCol>

          <IonCol size="auto">
            <IonIcon icon={ stopwatchOutline } />
            <IonLabel>
              {/* todo: replace 15 with user.settings.bufferTime */}
              { task.duration } - { task.duration + 15 } mins
            </IonLabel>
          </IonCol>

          { task.repeatEvery &&
            <IonCol size="auto">
              <IonIcon icon={ refreshCircleOutline } />
              <IonLabel>
                { (task.repeatEvery.fromCompletion && 'After ') || 'Every ' }
                { task.repeatEvery.duration } { task.repeatEvery.period }
                { task.repeatEvery.duration > 1 && 's' }
              </IonLabel>
            </IonCol>
          }
        </IonRow>

        { children &&
          <IonRow>
            { children }
          </IonRow>
        }

        <IonRow className="ion-padding">
          <IonLabel>"{ task.description }"</IonLabel>

        </IonRow>

        { task.tags && task.tags.length > 0 &&
          <IonRow className="ion-align-items-center ion-padding-horizontal">
            <IonCol>
              <IonIcon icon={ pricetagsOutline }/>
            </IonCol>
            { task.tags.map((tag:string, i:number) => {
              return (
                <IonChip
                  key={ i }
                  color="tertiary"
                >
                  { tag }
                </IonChip>
              );
            })}
          </IonRow>
        }
      </IonGrid>
    </IonAccordion>
  );
};
