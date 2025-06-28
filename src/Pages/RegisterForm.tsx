import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../App/store'
import { registerUser, clearError } from "../Features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import FormLeftSide from '../Components/FormLeftSide';
import '../styles/Form.css'

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email.").required("Email is required."),
  fullName: yup.string().min(3, "Full Name must be at least 3 characters.").required("Full Name is required."),
  password: yup.string().min(6, "Password must be at least 6 characters.").required("Password is required."),
});

export const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector((state: RootState) => state.auth.error);
  const status = useSelector((state: RootState) => state.auth.status);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", fullName: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      dispatch(clearError());
      const result = await dispatch(registerUser({ email: values.email, password: values.password, name: values.fullName }));

      if (registerUser.fulfilled.match(result)) {
        navigate("/dashboard");
      }
    },
  });

  return (
    <div className="container">
        <FormLeftSide/>
        <div className="right-side">
            <div className="right-side-inner">
                <h2>Welcome to Gotcha!</h2>
                <div>Please register to continue.</div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input name="email" type='email' value={formik.values.email} placeholder='Email' onChange={formik.handleChange} />
                        {formik.errors.email && <div className='errors'>{formik.errors.email}</div>}
                    </div>
                    <div>
                        <label>Full Name</label>
                        <input name="fullName" type='text' value={formik.values.fullName} placeholder='Full Name' onChange={formik.handleChange} />
                        {formik.errors.fullName && <div className='errors'>{formik.errors.fullName}</div>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input name="password" type="password" value={formik.values.password} placeholder='Password' onChange={formik.handleChange} />
                        {formik.errors.password && <div className='errors'>{formik.errors.password}</div>}
                    </div>
                    {error && <div>{error}</div>}
                    <button type="submit" disabled={status === "loading"}>
                        Register
                    </button>
                </form>
                <div> Already a member? <Link to='/login'>Login</Link> Instead.</div>
            </div>
        </div>
    </div>
  );
};
