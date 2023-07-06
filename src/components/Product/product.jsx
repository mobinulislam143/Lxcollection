import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

function Product(props) {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
            }
            return () => {
                componentMounted = false
            }
        }
        getProduct();
    }, [])
    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height='350px'/>
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updateedList = data.filter((x) => x.category === cat)
        setFilter(updateedList)
    }
    const ShowProduct = () => {
        return (
            <>
                <div className='d-flex justify-content-center mb-5 pb-5'>
                    <button onClick={() => setFilter(data)} type='button' className='btn btn-outline-dark me-2'>All</button>
                    <button type='button' onClick={() => filterProduct("men's clothing")} className='btn btn-outline-dark me-2'>Men's Cloth</button>
                    <button type='button' onClick={() => filterProduct("women's clothing")} className='btn btn-outline-dark me-2'>Women's Cloth</button>
                    <button type='button' onClick={() => filterProduct("jewelery")} className='btn btn-outline-dark me-2'>Jwellary</button>
                    <button type='button' onClick={() => filterProduct("electronics")} className='btn btn-outline-dark me-2'>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3'>
                                <div class="card h-100 text-center" style={{ width: '18rem', padding: '5px' }} key={product.id}>
                                    <img class="card-img-top" src={product.image} alt={product.title} height='250px' />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p class="card-text lead fw-bold">${product.price}</p>
                                        <a class="btn btn-outline-dark butBtn" href={`/product/${product.id}`}  style={{display: 'inline'}}>Buy Now</a>
                                    </div> 
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Product</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>

        </div>
    );
}

export default Product;