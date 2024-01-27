import { createContext } from 'react';

export const TaskContext = createContext(null);

const AllTasks = () => {
  const allTask = [
    {
      id: crypto.randomUUID(),
      title: 'Integration API',
      description:
        'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
      tags: ['Web', 'Python', 'API'],
      priority: 'High',
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'Integration API',
      description:
        'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
      tags: ['Web', 'Python', 'API'],
      priority: 'High',
      isFavorite: true,
    },
  ];
  return (
    <div>
      <TaskContext.Provider value={allTask}>{children}</TaskContext.Provider>
    </div>
  );
};

export default AllTasks;
