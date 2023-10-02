import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const Checkbox = ({ field, form: { touched, errors } }: any, ...props: any) => {
  return (
    <div>
      <div className='relative'>
        <div className='flex items-start'>
          <div className='flex items-center h-5'>
            <input
              {...field}
              {...props}
              type='checkbox'
              className='border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'></input>
            <AnimatePresence>
              {errors.toggle && touched.toggle && (
                <motion.div
                  key='error'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                  className='text-red-600 text-sm absolute top-6'>
                  {errors.toggle}
                </motion.div>
              )}
            </AnimatePresence>

            <div className='ml-3 text-sm'>
              <label
                htmlFor='terms'
                className='font-light text-gray-500 dark:text-gray-300'>
                I accept the{' '}
                <a
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  href='#'>
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
