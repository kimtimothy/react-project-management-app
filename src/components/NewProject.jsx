import React from 'react';
import Input from './Input.jsx';
import { useRef } from 'react';

export default function NewProject({ onAdd }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-stone-800 hover:text-stone-950'>Cancel</button>
        </li>
        <li>
          <button className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md' onClick={handleSave}>Save</button>
        </li>
      </menu>
      <div>
        <Input type="text" label="Title" ref={titleRef} />
        <Input label="Description" textarea ref={descriptionRef} />
        <Input type="date" label="Due Date" ref={dueDateRef} />
      </div>
    </div>
  );
}
