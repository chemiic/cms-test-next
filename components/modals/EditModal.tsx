'use client'

import BaseButton from "../BaseButton";
import {FC, FormEvent, MouseEventHandler, useEffect, useState} from "react";
import FormInput from "../FormInput";
import {useModal} from "../../hooks/useModal";
import {Product} from "../../types/types";
import editProduct from "../../actions/Api/editProduct";
import {useRouter} from "next/navigation";
import {tree} from "next/dist/build/webpack/loaders/next-route-loader/templates/app-page";
import {toast} from "react-toastify";
import {useError} from "../../hooks/useError";

const EditModal = () => {
    const router = useRouter()
    const {isOpen, onClose, type, data} = useModal();
    const onErrorOpen = useError(state => state.onOpen)

    const isOpenModal: boolean = isOpen && type === "editModal";
    const handleClose: MouseEventHandler<HTMLButtonElement> = (e) => {
        setValues({
            category: "",
            count: 0,
            description: "",
            discount: 0,
            id: "",
            image: "",
            price: 0,
            title: "",
            units: ""
        })
        onClose()
    }
    const [values, setValues] = useState(data)
    useEffect(()=>{
        setValues(data)
    },[data])

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const submitForm = async (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        const result = await editProduct(values)
        if(result.type == 'error'){
            onErrorOpen(`${result.res}`)
        } else{
            toast(`Товар успешно изменён: ${result.res}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        router.refresh()
        onClose()
    }

    return(
        <div className={`z-50 fixed h-full top-0 bottom-0 left-0 right-0 backdrop-blur-xl items-center justify-center ${isOpenModal ? 'flex' : 'hidden'}` }>
            <div className="w-full max-w-xl">
                <div className="text-2xl font-bold flex justify-between items-center text-[#6E6893] uppercase pb-5 mb-5 border-b border-[#6E6893]">
                    Изменить Товар
                    <button className="modal-close"
                        onClick={handleClose}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L22 22" stroke="#6E6893" strokeWidth="3" strokeLinecap="round"/>
                        <path d="M2 22L22 2" stroke="#6E6893" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </button>

                </div>
                <form className="form" onSubmit={(e)=>submitForm(e)}>
                    <div className="bg-white rounded-md p-7 flex justify-between">
                        <div className="flex flex-col gap-1">
                            <FormInput labelText={'Наименование'}
                                       inputId={'title'}
                                       value={values.title}
                                       name={'title'}
                                       onChange={handleInputChange}
                            />
                            <FormInput labelText={'Категория'}
                                       inputId={'categoryInput'}
                                       value={values.category}
                                       name={'category'}
                                       onChange={handleInputChange}
                            />
                            <FormInput labelText={'Единицы Измерения'}
                                       inputId={'unitsInput'}
                                       value={values.units}
                                       name={'units'}
                                       onChange={handleInputChange}
                            />

                            <div className="input-wrapper flex flex-col gap-2">
                                <label htmlFor="discount" className={`pl-2 font-semibold text-[#6e6893] uppercase`}>
                                    Дисконт
                                </label>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox"
                                           className="w-[40px] h-[40px] relative css-checkbox"
                                           id="checkbox1"
                                    />
                                    <input

                                        type="number"
                                        id="discount"
                                        className={`w-[180px] text-[#6e6893] border-none rounded bg-[#f4f2ff]
                                            h-[40px] outline-none px-2`}
                                        value={values.discount}
                                        name={'discount'}
                                        onChange={handleInputChange}

                                    />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2 max-w-md">
                                <label htmlFor={"description"} className={`pl-2 font-semibold text-[#6e6893] uppercase`}>Описание</label>
                                <textarea
                                    id="description"
                                    className={`h-[110px] resize-none w-[230px] text-[#6E6893] border-none rounded bg-[#f4f2ff] outline-none p-2`}
                                    value={values.description}
                                    name={'description'}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <FormInput labelText={'Количество'}
                                       inputId={'countInput'}
                                       value={values.count}
                                       name={'count'}
                                       onChange={handleInputChange}
                            />
                            <FormInput labelText={'Цена'}
                                       inputId={'priceInput'}
                                       value={values.price}
                                       name={'price'}
                                       onChange={handleInputChange}
                            />

                            <BaseButton
                                className="add-img mt-[20px]"
                            >
                                Добавить Изображение
                            </BaseButton>
                        </div>
                    </div>
                    <div className="rounded-md p-7 flex justify-between items-center">
                        <p>Итоговая стоимость: <span className={`text-[#6D5BD0] font-semibold`}>
                            ${values.discount==0 ?
                                (values.price * values.count)
                                :
                                values.price * values.count - ((values.price * values.count) * values.discount / 100)
                            }
                          </span></p>
                        <BaseButton
                            type={"submit"}
                        >
                            Изменить Товар
                        </BaseButton>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditModal;