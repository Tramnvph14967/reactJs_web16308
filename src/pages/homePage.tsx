import React from 'react'

type Props = {}

const homePage = (props: Props) => {
  return (

   <div className="content ">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://file.hstatic.net/1000355922/article/thuong_hieu_giay_da_hong_thanh_1e42dadfc4db4f9499b41d8ad0ee7c9d_9a4a8ae5bcc3427a9a55d84192190b42.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://theme.hstatic.net/1000288980/1000786173/14/slideshow_4.jpg?v=52" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://mrfourfashion.com/wp-content/uploads/2020/12/tra-gop-do-da-mrfour-1400x401.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="row m-4">
      <div className="col">
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="https://bizweb.dktcdn.net/100/080/164/products/giay-luoi-nam-da-that-cao-cap-37.jpg?v=1610342069860" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Giày da bò nam</h5>
            <span>Giá: 4.500.000 VNĐ</span>
          </div>
          <div className="card-body">
            <button  type="button" className="btn btn-danger card-link">Đặt mua</button>
            <button  type="button" className="btn btn-danger card-link">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="https://bumshop.com.vn/wp-content/uploads/2019/12/giay-da-ca-sau-nam-2.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Giày da bò nam</h5>
            <span>Giá: 4.500.000 VNĐ</span>
          </div>
          <div className="card-body">
            <button  type="button" className="btn btn-danger card-link">Đặt mua</button>
            <button  type="button" className="btn btn-danger card-link">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="https://www.chapi.vn/img/product/2021/4/13/giay-da-nam-chinh-hang-bayeks-13-new.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Giày da bò nam</h5>
            <span>Giá: 4.500.000 VNĐ</span>
          </div>
          <div className="card-body">
            <button  type="button" className="btn btn-danger card-link">Đặt mua</button>
            <button  type="button" className="btn btn-danger card-link">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="https://xuonggiay.vn/app/webroot/upload/image/images/giay-da-bo-nam.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Giày da bò nam</h5>
            <span>Giá: 4.500.000 VNĐ</span>
          </div>
          <div className="card-body">
            <button  type="button" className="btn btn-danger card-link">Đặt mua</button>
            <button  type="button" className="btn btn-danger card-link">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
   </div>

      
   
  )
}

export default homePage