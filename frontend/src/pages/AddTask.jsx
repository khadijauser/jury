import React, { useState } from 'react';

const AddTask = () => {
  const [task, setTask] = useState({
    description: '',
    startDate: '',
    endDate: '',
    resources: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add the logic to save the task
    console.log(task);
  };

  return (
    <div className="add-task-container" style={{ padding: '20px', backgroundColor: '#a9ddf4', borderRadius: '8px' }}>
      <h2 className="text-center" style={{ color: '#15506f', marginBottom: '20px' }}>Add New Task</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label
          htmlFor="description"
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#3e5669',
            textTransform: 'capitalize',
          }}
        >
          Task Description
        </label>
        <textarea
          name="description"
          id="description"
          value={task.description}
          onChange={handleChange}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #b29a6b',
            fontSize: '14px',
            color: '#15506f',
          }}
          rows="4"
        />
        
        <label
          htmlFor="startDate"
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#3e5669',
            textTransform: 'capitalize',
          }}
        >
          Start Date
        </label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={task.startDate}
          onChange={handleChange}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #b29a6b',
            fontSize: '14px',
            color: '#15506f',
          }}
        />

        <label
          htmlFor="endDate"
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#3e5669',
            textTransform: 'capitalize',
          }}
        >
          End Date
        </label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={task.endDate}
          onChange={handleChange}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #b29a6b',
            fontSize: '14px',
            color: '#15506f',
          }}
        />

        <label
          htmlFor="resources"
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#3e5669',
            textTransform: 'capitalize',
          }}
        >
          Resources Required
        </label>
        <input
          type="text"
          name="resources"
          id="resources"
          value={task.resources}
          onChange={handleChange}
          placeholder="Enter resources"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #b29a6b',
            fontSize: '14px',
            color: '#15506f',
          }}
        />

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#539a77',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#3e5669')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#539a77')}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
