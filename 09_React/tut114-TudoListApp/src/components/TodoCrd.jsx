import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoCrd = ({ item, index, handleCheck, handleEdit, handleDelete }) => {
    return (
        <div
            className={`flex flex-col xl:flex-row justify-between w-full items-center py-3 px-6 my-3 rounded-md shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 ${
                item.isCompleted ? 'bg-gray-300 opacity-75' : 'bg-white'
            }`}
        >
            <input
                type='checkbox'
                checked={item.isCompleted}
                onChange={() => handleCheck(index)}
                className='mr-3'
            />
            <div className={`w-full xl:w-[30vw] break-words text-lg text-center xl:text-left ${item.isCompleted ? 'line-through' : ''}`}>
                {item.text}
            </div>
            <div className='flex space-x-2 mt-2 xl:mt-0'>
                <button
                    onClick={() => handleEdit(index)}
                    className='bg-green-600 text-white px-4 py-1.5 rounded hover:bg-white hover:text-green-600 transition-all duration-300 ease-in-out shadow-md flex items-center'
                >
                    Edit
                    <FaEdit className='ml-2' />
                </button>
                <button
                    onClick={() => handleDelete(index)}
                    className='bg-red-600 text-white px-4 py-1.5 rounded hover:bg-white hover:text-red-600 transition-all duration-300 ease-in-out shadow-md flex items-center'
                >
                    Delete
                    <MdDelete className='ml-2' />
                </button>
            </div>
        </div>
    );
};

export default TodoCrd;
