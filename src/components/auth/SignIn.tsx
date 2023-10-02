import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { initialState as stateSigIn } from '../../store/reducer/SigInSlice';
import { IRestore } from '../../interface/restorepassword.interface';
import { useNavigate } from 'react-router-dom';
import { setFormValuesSigIn } from '../../store/reducer/SigInSlice';
import Button from '../Button';
import Title from '../Title';
import Phone from '../phone';
import Password from '../Password';
const SignIn = () => {
  const dispatch = useDispatch();
  const [hasPhoneNumber, setHasPhoneNumber] = useState(false);
  let navigate = useNavigate();
  const onSubmit = (values: IRestore) => {
    const urlParams = new URLSearchParams(window.location.search);
    const hasPhoneNumberParam = urlParams.get('hasPhoneNumber');
    if (hasPhoneNumberParam && hasPhoneNumberParam.toLowerCase() === 'true') {
      setHasPhoneNumber(true); // Set to true only if hasPhoneNumberParam is 'true'
      return;
    } else {
      setHasPhoneNumber(false); // Set to false for any other value, including 'false'
    }

    if (!hasPhoneNumber) {
      navigate('/signup');
    }
    dispatch(setFormValuesSigIn(values));
  };
  console.log('kox', hasPhoneNumber);

  return (
    <div>
      <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Sign In
              </h1>
              <Formik
                onSubmit={onSubmit}
                initialValues={stateSigIn}
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
                  if (!values.password && hasPhoneNumber) {
                    errors.password = 'Please enter your password';
                  }
                  return errors;
                }}>
                {({ isSubmitting }) => (
                  <Form className='space-y-4 md:space-y-6'>
                    <Field type='text' name='title' component={Title} />
                    <Field type='text' name='phone' component={Phone} />
                    {hasPhoneNumber && (
                      <Field
                        type='text'
                        name='password'
                        component={Password}></Field>
                    )}
                    <div className='mt-2'>
                      <Link
                        to='/reset'
                        className='mt-2 text-white text-sm font-medium underline hover:text-gray-300'>
                        Reset Password
                      </Link>
                    </div>
                    <Button
                      isSubmitting={isSubmitting}
                      buttonName='SigIn'></Button>
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

export default SignIn;
