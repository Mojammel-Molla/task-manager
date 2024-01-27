import { useState } from 'react';
import TaskAction from './TaskAction';
import TaskList from './TaskList';
import AddTaskModal from './AddTaskModal';

const TaskBody = () => {
  const [tasks, setTasks] = useState(defaultTask);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddTask = () => {
    setShowAddModal(true);
  };
  return (
    <div className="container mb-20 rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
      {showAddModal && <AddTaskModal />}
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <TaskAction handleAddTask={handleAddTask} />
      </div>
      <div className="overflow-auto">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskBody;
