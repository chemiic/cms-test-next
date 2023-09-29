import {NextPage} from "next";
import Header from "./components/Header";
import Table from "./components/table/Table";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import getProducts from "../actions/Api/getProducts";


const HomePage: NextPage =  async () => {

        const products = await getProducts()
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