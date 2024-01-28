// import { useContext } from 'react';
import TaskAction from './TaskAction';

import AddTaskModal from './AddTaskModal';
// import { TaskContext } from '../../data/AllTasks';
import TaskList from './TaskList';
import { useState } from 'react';
import UseTasks from '../../data/useTasks';

const TaskBody = () => {
  // const [allTask] = useContext(TaskContext);
  const allTasks = [
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
      title: 'API Data Synchronization with Python',
      description:
        'Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.',
      tags: ['Python', 'Data', 'API'],
      priority: 'Low',
      isFavorite: true,
    },
  ];

  const [showAddModal, setShowAddModal] = useState(false);
  const [tasks, setTasks] = useState([allTasks]);
  const handleAddTask = newTask => {
    console.log('Your task added', newTask);
    setTasks([...tasks, newTask]);
    alert('Your task has been added');
  };
  return (
    <div className="container mb-20 rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
      {showAddModal && <AddTaskModal handleAddTask={handleAddTask} />}
      <div className="mb-14  items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <TaskAction onAddClick={() => setShowAddModal(true)} />
      </div>
      <div className="overflow-auto">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskBody;
