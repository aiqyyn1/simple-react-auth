import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { initialState as stateRestore } from '../../store/reducer/RestorePasswordSlice';
import { IRestore } from '../../interface/restorepassword.interface';
import Button from '../Button';
import { setFormValuesRestore } from '../../store/reducer/RestorePasswordSlice';
import Title from '../Title';
import Phone from '../phone';
const RestorePassword = () => {
  const dispatch = useDispatch();
  const onSubmit = (values: IRestore) => {

    dispatch(setFormValuesRestore(values));
  };

  return (
    <div>
      <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Reset Password
              </h1>
              <Formik
                onSubmit={onSubmit}
                initialValues={stateRestore}
                validate={(values) => {
                  const errors: any = {};
                  const phoneValidate = /^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/;
                  if (!values.phone) {
                    errors.phone = 'Please enter your phone';
                  } else if (!values.phone.match(phoneValidate)) {
                    errors.phone = 'Please type correctly';
                  }
                  if (!values.title) {
                    errors.title = 'Please enter your title';
                  }
                  return errors;
                }}>
                {({ isSubmitting }) => (
                  <Form className='space-y-4 md:space-y-6'>
                    <Field type='text' name='title' component={Title} />
                    <Field
                      type='text'
                      name='phone'
                      placeholder='Enter your phone number'
                      component={Phone}
                    />
                    <Button
                      isSubmitting={isSubmitting}
                      buttonName='Reset Password'></Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestorePassword;
