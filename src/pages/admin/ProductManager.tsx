import React from 'react'
import { ProductType } from '../types/products'

type ProductManagerProps = {
   products: ProductType[],
   onRemove: (id: number) => void
}


const ProductManager = ({ products, onRemove }: ProductManagerProps) => {

  return (
    <div>
      <button><a href="/admin/product/add">Thêm Sản phẩm mới</a></button>
      
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => onRemove(item.id)}>Remove</button>
               
              </td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
  )
}

export default ProductManager