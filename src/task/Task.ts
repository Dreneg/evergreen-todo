export interface Task {
  id: string;
  title: string;
  description?: string;
  type: 'task' | 'story' | 'bug';
  category?: string;
  state: 'backlog' | 'todo' | 'progress' | 'done' | 'archive';
}
