import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../App/store'
import { loginUser, clearError } from '../Features/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormLeftSide from '../Components/FormLeftSide';
import '../styles/Form.css'

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email.').required('Email is required.'),
  password: yup.string().min(6, 'Password must be at least 6 characters.').required('Password is required.'),
});

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector((state: RootState) => state.auth.error);
  const status = useSelector((state: RootState) => state.auth.status);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async (values) => {
      dispatch(clearError());
      const result = await dispatch(loginUser(values));
      if (loginUser.fulfilled.match(result)) {
        navigate('/dashboard');
      }
    },
  });

  return (
    <div className='container'>
        <FormLeftSide/>
        <div className="right-side">
            <div className="right-side-inner">
                <h2>Welcome back!</h2>
                <div>Please sign in to continue.</div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label>Email
                          <input name='email' type='email' value={formik.values.email} placeholder='Email' onChange={formik.handleChange} />
                        </label>
                        {formik.errors.email && <div className='errors'>{formik.errors.email}</div>}
                    </div>
                    <div>
                        <label>Password
                          <input name='password' type='password' value={formik.values.password} placeholder='Password' onChange={formik.handleChange} />
                        </label>
                        {formik.errors.password && <div className='errors'>{formik.errors.password}</div>}
                    </div>
                    {error && <div>{error}</div>}
                    <button type='submit' disabled={status === 'loading'}>
                        Login
                    </button>
                </form>
                <div> Don't have an account? <Link to='/register'>Register</Link> Instead.</div>
            </div>
        </div>
    </div>
  );
};