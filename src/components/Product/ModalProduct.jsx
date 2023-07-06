import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';


function ModalProduct(props) {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json())
            setLoading(false);
        }
        getProduct()
    }, [])
    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height='400px' />
                </div>
                <div className='col-md-6' style={{lineHeight: '2'}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25}  width={150}/>
                    <Skeleton height={50}/>
                    <Skeleton height={150}/>
                    <Skeleton height={150} width={100}/>
                    <Skeleton height={150} width={100}/>

                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className=' row showProducts align-items-center justify-content-center py-4 '>
                    <div className='col-md-6'>
                        <img src={product.image} alt={product.title} height='400px' width='400px' />
                    </div>
                    <div className='col-md-6'>
                        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                        <h1 className='display-5'>{product.title}</h1>
                        <p className='lead fw-bolder'>
                            Rating {product.rating && product.rating.rate}
                            <i className='fa fa-star'></i>
                        </p>
                        <h3 className='display-6 fw-bold my-4'>
                            ${product.price}
                        </h3>
                        <p className='lead'> {product.description}</p>
                        <div className='btnGroup d-flex'>
                            <button onClick={()=> addProduct(product)} className='btn btn-outline-dark '>Add to Cart</button>
                            <a className='btn btn-dark mx-2'>Go to Cart</a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    return (
        <div>
            <div className='container'>
               
                    {loading ? <Loading /> : <ShowProduct />}


            </div>

        </div>
    );
}

export default ModalProduct;