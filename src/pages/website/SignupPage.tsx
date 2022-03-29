import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api/auth';
type FormInputs = {
    name: string,
    email: string,
    password: string | number
}

const SignupPage = () => {
    const { register, handleSubmit, formState } = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = data => {
        signup(data);
        // navigate('/admin/product')
    }

    return (

        <div className='container px-2'>
            <h1 className='text-center py-4'>Sign Up</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" {...register('name', { required: true })} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" {...register('email', { required: true })} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4"{...register('password', { required: true })} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </form>

        </div>

    )
}

export default SignupPage