import { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  // Custom state to handle submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FormSubmit = async (data) => {
    setIsSubmitting(true); // Set submitting state to true

    await delay(4); // Simulating network delay
    console.log(data);

    // Simulating account issues
    if (data.username === 'budda') {
      setError('username', { message: 'This account was blocked due to restricted activity' });
      setIsSubmitting(false); // Reset submitting state after handling error
    } else if (data.username === 'pandu') {
      setError('username', { message: 'User not found..' });
      setIsSubmitting(false); // Reset submitting state after handling error
    } else {
      try {
        const response = await fetch('http://localhost:3000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        console.log('Data submitted successfully');
        setIsSubmitting(false); // Reset submitting state after successful submission
        reset(); // Reset form after submission
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        setIsSubmitting(false); // Reset submitting state on error
      }
    }
  };

  const delay = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log('Timeout completed');
      }, time * 1000);
    });
  };

  return (
    <>
      <h2 className='p-3 m-7 text-2xl text-wrap'>
        Handling Forms + <br /> Connecting React to <br /> Express Backend
      </h2>

      {isSubmitting && <div>Submitting form...</div>} {/* Show submitting message */}

      <form className='flex flex-col gap-3' onSubmit={handleSubmit(FormSubmit)}>
        <input
          type='text'
          className='p-2 rounded-lg'
          {...register('username', {
            required: {
              value: true,
              message: '**This field is Required',
            },
            minLength: {
              value: 4,
              message: 'Username must be greater than or equal to 4 characters',
            },
            maxLength: {
              value: 8,
              message: 'Username must be less than or equal to 8 characters',
            },
          })}
          name='username'
          placeholder='username'
        />
        {errors.username && <div className='text-xs'>{errors.username.message}</div>}

        <input
          type='password'
          className='p-2 rounded-lg'
          {...register('password', {
            required: {
              value: true,
              message: '**This field is Required',
            },
            minLength: {
              value: 4,
              message: 'Password must be greater than or equal to 4 characters',
            },
            maxLength: {
              value: 8,
              message: 'Password must be less than or equal to 8 characters',
            },
          })}
          name='password'
          placeholder='password'
        />
        {errors.password && <div className='text-xs'>{errors.password.message}</div>}

        <button disabled={isSubmitting} type='submit'>
          Submit
        </button>

        {errors.username && <div className='text-xs'>{errors.username.message}</div>}
      </form>
    </>
  );
}

export default App;
