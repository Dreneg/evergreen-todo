export type TaskType = 'task' | 'story' | 'bug';

export interface Task {
  id: string;
  title: string;
  description?: string;
  type: TaskType;
  category?: string;
  state: 'backlog' | 'todo' | 'progress' | 'done' | 'archive';
}
