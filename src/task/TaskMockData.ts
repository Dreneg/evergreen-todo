import { Task } from './Task';

export const TASK_DATA: Task[] = [
  {
    id: '1',
    title: 'Initialize Todo App',
    type: 'task',
    description: 'Default settings should be overridden, or at least checked the current settings.',
    state: 'backlog',
    category: 'work',
  },
  {
    id: '2',
    title: `Painting child's bedroom`,
    type: 'story',
    state: 'todo',
    category: 'personal',
  },
  {
    id: '3',
    title: 'Write shipping list',
    type: 'task',
    state: 'todo',
    category: 'personal',
  },
  {
    id: '4',
    title: 'Fix broken lamp in the bathroom',
    type: 'bug',
    state: 'todo',
    category: 'personal',
  },
  {
    id: '5',
    title: 'Update docker images',
    type: 'task',
    description: 'Docker images have to be updated in the current sprint',
    state: 'progress',
    category: 'work',
  },
  {
    id: '6',
    title: 'Learning react basics with typescript',
    type: 'task',
    state: 'progress',
    category: 'personal',
  },
  {
    id: '7',
    title: 'Learning and practice advanced Angular topics',
    type: 'task',
    state: 'done',
  },
  {
    id: '8',
    title: 'Learning Angular basic topics',
    type: 'task',
    description: 'See http://www.angular.io',
    state: 'archive',
  },
];
