import React, { FormEvent, useState } from 'react';
import RichTextEditor from '../../shared/RichTextEditor';
import { Task, TaskType } from '../Task';
import { TASK_DATA } from '../TaskMockData';
import './TaskForm.css';

interface Props {
  task?: Task;
}

function TaskForm({ task }: Props): JSX.Element {
  const [state, setState] = useState<Task>({
    id: Math.random().toString(),
    state: 'todo',
    title: '',
    type: 'task',
    category: '',
    description: '',
  });

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    TASK_DATA.push(state);
    setState({
      ...state,
      id: Math.random().toString(),
      title: '',
      category: '',
      description: '',
    });
  };

  const renderTypeButton = (type: TaskType, caption: string): JSX.Element => {
    return (
      <button
        className={(state.type === type ? 'selected' : '') + ' button'}
        onClick={() => setState({ ...state, type })}>
        {caption}
      </button>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="task-form-row actions">
        <h2 className="form-title">Create task</h2>
        <input type="submit" value="Save" className="save-button" />
      </div>
      <div className="task-form-row title d-flex">
        <label className="input-caption" htmlFor="title-input">
          Title
        </label>
        <input
          id="title-input"
          className="form-input-field"
          type="text"
          value={state.title}
          onChange={(event) => setState({ ...state, title: event.target.value })}
        />
      </div>
      <div className="task-form-row type d-flex">
        <label className="input-caption" htmlFor="type-button-group">
          Type
        </label>
        <div id="type-button-group" className="type-button-group">
          {renderTypeButton('task', 'Task')}
          {renderTypeButton('story', 'Story')}
          {renderTypeButton('bug', 'Bug')}
        </div>
      </div>
      <div className="task-form-row category d-flex">
        <label className="input-caption" htmlFor="category-input">
          Category
        </label>
        <input
          id="category-input"
          className="form-input-field"
          type="text"
          value={state.category}
          onChange={(event) => setState({ ...state, category: event.target.value })}
        />
      </div>
      <div className="task-form-row state d-flex">
        <label className="input-caption" htmlFor="standard-select">
          State
        </label>
        <div className="state-select form-input-field">
          <select id="standard-select">
            <option value={'backlog'}>Backlog</option>
            <option value={'todo'}>Todo</option>
            <option value={'progress'}>Progress</option>
          </select>
        </div>
      </div>
      <div className="task-form-row description">
        <label className="input-caption">Description</label>
        <RichTextEditor
          className="editor"
          content={state.description}
          onContentUpdate={(content) => setState({ ...state, description: content })}></RichTextEditor>
      </div>
    </form>
  );
}

export default TaskForm;
