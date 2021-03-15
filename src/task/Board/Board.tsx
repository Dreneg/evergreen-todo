import React, { useState } from 'react';
import { Task } from '../Task';
import TaskCard from '../TaskCard';
import { TASK_DATA } from '../TaskMockData';
import './Board.css';

function Board(): JSX.Element {
  const [todoTasks] = useState(() => TASK_DATA.filter((task) => task.state === 'todo'));
  const [progressTasks] = useState(() => TASK_DATA.filter((task) => task.state === 'progress'));
  const [doneTasks] = useState(() => TASK_DATA.filter((task) => task.state === 'done'));

  const renderTasks = (tasks: Task[]): JSX.Element[] => {
    return tasks.map((task) => <TaskCard key={task.id} task={task}></TaskCard>);
  };

  return (
    <div className="board d-flex h-100 w-100">
      <div className="todo-column column flex-grow-1 flex-shrink-0 align-content-stretch">
        <div className="column-caption h4 text-center mx-3 p-1">Todo</div>
        <div className="tasks d-flex flex-wrap justify-content-center">{renderTasks(todoTasks)}</div>
      </div>
      <div className="progress-column column flex-grow-1 flex-shrink-0 align-content-stretch">
        <div className="column-caption h4 text-center mx-3 p-1">Progress</div>
        <div className="tasks d-flex flex-wrap justify-content-center">{renderTasks(progressTasks)}</div>
      </div>
      <div className="done-column column flex-grow-1 flex-shrink-0 align-content-stretch">
        <div className="column-caption h4 text-center mx-3 p-1">Done</div>
        <div className="tasks d-flex flex-wrap justify-content-center">{renderTasks(doneTasks)}</div>
      </div>
    </div>
  );
}

export default Board;
