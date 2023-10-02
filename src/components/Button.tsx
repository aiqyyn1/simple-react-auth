import React from 'react';

const Button = ({ isSubmitting, buttonName }: any) => {
  return (
    <div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full p-12 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
