import { ReactChildren } from "types";
import { Task } from "classes";

type Props = {
  children?: ReactChildren;
  task: Task;
}

export default function TaskCard( { children, task }: Props ) {
  return (
    <div>
      <div>
        <div>
          <span>
            P{ task.priority }
          </span>

          <div>
            <span>
              {/* todo: replace 15 with user.settings.bufferTime */}
              { task.duration } - { task.duration + 15 } mins
            </span>
          </div>

          { task.repeatEvery &&
            <div>
              {/* <MaterialCommunityIcons style={ styles.inlineIcon } name="repeat" /> */}
              <span>

                { (task.repeatEvery.fromCompletion && 'After ') || 'Every ' }
                { task.repeatEvery.duration } { task.repeatEvery.period }
                { task.repeatEvery.duration > 1 && 's' }
              </span>
            </div>
          }
        </div>

        { children &&
          <div>
            { children }
          </div>
        }

        <span>
          "{ task.description }"
        </span>

        { task.tags && task.tags.length > 0 &&
          <div>
            {/* <MaterialCommunityIcons style={ styles.inlineIcon } name="tag-outline" /> */}
            { task.tags.map((tag:string, i:number) => {
              return (
                <span
                  key={ i }
                >
                  { tag }
                </span>
              );
            })}
            <div style={ {flexGrow: 5} }></div>
          </div>
        }
      </div>
    </div>
  );
};
