import { ReactChildren } from 'types';
import { Task } from 'classes';

import { IonAccordion, IonChip, IonCol, IonIcon, IonItem, IonLabel, IonRow, IonGrid } from '@ionic/react';
import { warning, stopwatch, refreshCircle, pricetags } from 'ionicons/icons';

import './TaskCard.css';

type Props = {
  children?: ReactChildren;
  task: Task;
  listId: string;
}

export default function TaskCard( { children, task, listId }: Props ) {
  return (
    <IonAccordion value={ listId }>
      <IonItem slot="header" color="primary">
        <IonLabel>{ task.title }</IonLabel>
      </IonItem>
      <IonGrid slot="content" className="ion-padding-vertical">
        <IonRow className="ion-justify-content-between ion-padding-horizontal">
          <IonCol size="auto">
            <IonIcon icon={ warning } />
            <IonLabel>
              P{ task.priority }
            </IonLabel>
          </IonCol>

          <IonCol size="auto">
            <IonIcon icon={ stopwatch } />
            <IonLabel>
              {/* todo: replace 15 with user.settings.bufferTime */}
              { task.duration } - { task.duration + 15 } mins
            </IonLabel>
          </IonCol>

          { task.repeatEvery &&
            <IonCol size="auto">
              <IonIcon icon={ refreshCircle } />
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
            <IonIcon icon={ pricetags }/>
            { task.tags.map((tag:string, i:number) => {
              return (
                <IonChip
                  key={ i }
                >
                  <IonLabel>{ tag }</IonLabel>
                </IonChip>
              );
            })}
          </IonRow>
        }
      </IonGrid>
    </IonAccordion>
  );
};
