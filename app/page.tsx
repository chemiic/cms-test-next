'use client'
import {NextPage} from "next";
import Header from "./components/Header";
import Table from "./components/table/Table";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from "react";
import axios from "axios";

const HomePage: NextPage =  () => {
    const [products, setProducts] = useState([{
        id: '',
        title: '',
        description: '',
        category: '',
        price: 0,
        units: '',
        count: 0,
        discount: 0,
        image: ''
    }])
    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}`)
            .then((response: { data: any; })=>{
                setProducts(response.data)
            }).catch(error=> {
                setProducts([{
                    id: '',
                    title: '',
                    description: '',
                    category: '',
                    price: 0,
                    units: '',
                    count: 0,
                    discount: 0,
                    image: ''
                }])
            })
    })

  return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                className={`absolute top-10 right-10 max-w-[300px]`}
            />
            <Header products={products}/>
            <Table products={products}/>
        </>
    );
    }
;
export default HomePage;