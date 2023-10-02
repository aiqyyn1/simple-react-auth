import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { initialState, setFormValues } from '../../store/reducer/SignUpSlice';
import { selectRegistration } from '../../store/reducer/SignUpSlice';
import { ISign } from '../../interface/signup.interface';
import Phone from '../phone';
import Title from '../Title';
import Name from '../Name';
import Email from '../Email';
import Checkbox from '../Checkbox';
import Button from '../Button';
const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const onSubmit = (values: ISign) => {

    dispatch(setFormValues(values));
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create an account
            </h1>
            <Formik
              onSubmit={onSubmit}
              initialValues={initialState}
              validate={(values) => {
                const errors: any = {};
                const phoneValidate = /^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/;
                if (!values.name) {
                  errors.name = 'Please enter your name';
                }
                if (!values.phone) {
                  errors.phone = 'Please enter your phone';
                } else if (!values.phone.match(phoneValidate)) {
                  errors.phone = 'Please type correctly';
                }
                if (!values.email) {
                  errors.email = 'Please enter your email';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if (!values.title) {
                  errors.title = 'Please enter your title';
                }
                if (!values.toggle) {
                  errors.toggle = 'Please check checkBox';
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
                  <Field
                    type='text'
                    name='name'
                    placeholder='Enter your phone number'
                    component={Name}></Field>
                  <Field type='email' name='email' component={Email} />
                  <Field
                    id='terms'
                    aria-describedby='terms'
                    type='checkbox'
                    name='toggle'
                    component={Checkbox}
                  />
                  <Button isSubmitting={isSubmitting}></Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
