import React from 'react'


const AddTodo = ({ handleInput, todo, handleAddTodo, toggleShowCompleted, showCompletedTodos }) => {
    return (
        <div>
            <div className='add-todo mb-6'>
                <h2 className='text-lg font-bold mb-4 text-white'>Add A Todo</h2>
                <input
                        onChange={handleInput}
                        value={todo}
                        type='text'
                        placeholder='Enter your todo...'
                        className='border-2 border-gray-300 py-2 px-5 rounded-lg w-full xl:w-[20vw] mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out'
                />
                <button
                        onClick={handleAddTodo}
                        className='bg-blue-600 text-white py-2 px-5 rounded-lg w-full xl:w-[10vw] hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out shadow-md'
                >
                        Add
                </button>
            </div>

            <hr />
            <br />

            <h1 className='text-lg font-bold mb-4 text-white'>Your Todo List</h1>
            <label className='text-white mb-4'>
                <input 
                        type="checkbox" 
                        onChange={toggleShowCompleted} 
                        checked={showCompletedTodos} 
                        className='mr-2' 
                />
                Show Completed Todos
            </label>

        </div>
    )
}
  


export default AddTodo