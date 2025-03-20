import React, { useEffect, useState } from 'react'
import Card from './Card'
import config from '../config'
import httpService from '../services/httpServices'

const url = config.baseUrl

export default function Products() {

    const [products, setProducts] = useState([])
    const [productId, setProductId] = useState("")
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [selectOptionValues, setselectOptionValues] = useState([]);

    useEffect(() => {
        httpService.fetch(url + productId)
            .then(data => {
                console.log(data[0])
                if (data[0].products === undefined) {
                    setProducts(data)
                    const uniqueArr = [...new Set(data.map(item => item.category))];
                    setselectOptionValues(uniqueArr)
                } else {
                    setProducts(data[0].products)
                    const uniqueArr = [...new Set(data[0].products.map(item => item.category))];
                    setselectOptionValues(uniqueArr)
                }
                setSelectedCategory("All")
            }
            )
    }, [productId])


    const onOptionChangeHandler = (event) => {
        const filteredArr = products.filter((product) => product.category == event.target.value);
        console.log(filteredArr)
        setCategoryProducts(filteredArr)
        setSelectedCategory(event.target.value);
    };


    return (
        <div className=''>
            <h2 className='font-bold text-3xl'>Products Page</h2>
            {/* <input className="border-4 border-indigo-500" type="text" value={productId} onChange={(e) => setProductId(e.target.value)} /> */}
            <div>
                <h3>select Category</h3>
                <select onChange={onOptionChangeHandler}>
                    <option>All</option>
                    {selectOptionValues.map((value, index) => {
                        return (
                            <option key={index}>
                                {value}
                            </option>
                        );
                    })}
                </select>
                <h3>You selected: {selectedCategory} </h3>
            </div>

            /* Render  all products   */
            {(selectedCategory == "All") ? (
                products.length > 0 &&
                products.map((product, index) => {
                    return <Card product={product} key={index} />
                })
            )

            /* Render  only the the products of a selected category   */
            : (
                categoryProducts.length > 0 &&
                categoryProducts.map((product, index) => {
                   return <Card product={product} key={index} />
                })
            )
            }
        </div>
    )

}
