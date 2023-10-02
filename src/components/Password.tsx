import { AnimatePresence, motion } from 'framer-motion';

const Password = (
  { field, form: { touched, errors } }: any,

  ...props: any
) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className='relative'
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
    <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Password
          </label>
          <input
            {...field}
            {...props}
            placeholder='Enter your password'
            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></input>
          <AnimatePresence>
            {errors.password && touched.password && (
              <motion.h1
                key='error'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className='text-red-600 text-sm absolute left-0'>
                {errors.password}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Password;
