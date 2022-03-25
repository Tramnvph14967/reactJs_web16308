import React, { useEffect } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import {read} from '../../api/product'
import {ProductType}  from '../types/products'

type ProductEditProps = {
  onUpdate: (product: ProductType) => void
}

type FormInputs = {
  name: String,
  price: number
}


const ProductEdit = (props: ProductEditProps) => {
  const {register, handleSubmit, formState: {errors},reset} = useForm<FormInputs>();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    const getProducts = async () =>{
      const {data} = await read (id);
      reset(data);
    }
    getProducts();
  },[])


  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onUpdate(data);
    navigate('admin/product');

    
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', { required: true})} />
        { errors.name && <span>Fields is required</span>}
        <input type="number" {...register('price')} />
        <button>Update</button>
    </form>
    </div>
    
  )
}

export default ProductEdit