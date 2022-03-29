import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../api/auth';


type FormInputs = {
    name: string,
    email: string,
    password: string | number
}
const signinPage = () => {
    const { register, handleSubmit, formState } = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = async data => {
        const { data: user } = await signin(data);
        localStorage.setItem('user', JSON.stringify(user))
        // navigate('/admin/product')
    }
    return (
        <div className='container'>
            <h1 className='text-center py-4'>Signin</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" {...register('email', {required: true})}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" {...register('password', {required: true})} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>

        </div>

    )
}

export default signinPage