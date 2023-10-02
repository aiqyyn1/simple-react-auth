import InputMask from 'react-input-mask';
import { AnimatePresence, motion } from 'framer-motion';
const Phone = ({ field, form: { touched, errors }, form, ...props }: any) => {
  return (
    <div>
      <div className='relative'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Phone Number
        </label>
        <InputMask
          {...props}
          mask='+7 (999) 999 99 99'
          value={field.value}
          placeholder='type your number'
          onChange={(event) => {
            const { value } = event.target;
            if (!form.touched[field.name]) {
              form.setFieldTouched(field.name);
            }

            form.setFieldValue(field.name, value);
          }}
          className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        <AnimatePresence>
          {errors.phone && touched.phone && (
            <motion.h1
              key='error'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
              className='text-red-600 text-sm absolute left-0'>
              {errors.phone}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Phone;
