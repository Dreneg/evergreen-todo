import React from 'react';
import { Task } from '../Task';
import './TaskForm.css';

interface Props {
  task?: Task;
}

function TaskForm({ task }: Props): JSX.Element {
  return <div>Task form</div>;
}

export default TaskForm;
