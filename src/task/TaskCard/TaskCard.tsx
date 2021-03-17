import React from 'react';
import { Task } from '../Task';
import './TaskCard.css';

interface Props {
  task: Task;
}

function TaskCard({ task }: Props): JSX.Element {
  const getTaskTypeIcon = (): string => {
    let iconClassName;
    switch (task.type) {
      case 'story':
        iconClassName = 'bi bi-journal-text story';
        break;
      case 'bug':
        iconClassName = 'bi bi-journal-x bug';
        break;
      case 'task':
      default:
        iconClassName = 'bi bi-journal-code task';
        break;
    }
    return 'type-icon ' + iconClassName;
  };

  const createDescription = () => {
    // TODO sanitize description
    return { __html: task.description ? task.description : '' };
  };

  return (
    <div className="task-card">
      <div className="title">{task.title}</div>
      <i className={getTaskTypeIcon()}></i>
      <div className="description" dangerouslySetInnerHTML={createDescription()}></div>
    </div>
  );
}

export default TaskCard;
