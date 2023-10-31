'use client'

import BaseButton from "../BaseButton";
import {FormEvent, MouseEventHandler, useState} from "react";
import FormInput from "../FormInput";
import {useModal} from "../../hooks/useModal";
import addProduct from "../../actions/Api/addProduct";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {useError} from "../../hooks/useError";


const AddModal = () => {
    const router = useRouter()
    const {isOpen, onClose, type} = useModal();
    const onErrorOpen = useError(state => state.onOpen)
    const handleClose: MouseEventHandler<HTMLButtonElement> = () => {
        setFile("");
        setBase64("");
        onClose()
    }
    const isOpenModal: boolean = isOpen && type === "addModal";

    const inputsData = {
        title: '',
        description: '',
        category: '',
        price: 0,
        units: 'шт',
        count: 0,
        discount: 0,
        image: ''
    }
    const [values, setValues] = useState(inputsData)
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const submitForm = async (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        const result = await addProduct(values)
        if(result.type == 'error'){
            onErrorOpen(`${result.res}`)
        } else{
            toast(`Товар успешно добавлен: ${result.res}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            router.refresh()
            setValues(inputsData)
            setFile("");
            setBase64("");
            onClose()
        }
    }

    // State to store the file
    const [file, setFile] = useState<File | string>("");

    // State to store the base64
    const [base64, setBase64] = useState<string | null>("");


    // When the file is selected, set the file state
    const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        setFile(e.target.files[0]);

        const base64 = await toBase64(file as File);

        setBase64(base64 as string);

        setValues({
            ...values,
            // @ts-ignore
            ["image"]: base64,
        });
    };

    // On click, clear the input value
    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.currentTarget.value = "";
    };

    // On submit, upload the file


    return(
        <div className={`z-50 fixed h-full top-0 bottom-0 left-0 right-0 backdrop-blur-xl items-center justify-center ${isOpenModal ? 'flex' : 'hidden'}` }>
            <div className="w-full max-w-xl">
                <div className="text-2xl font-bold flex justify-between items-center text-[#6E6893] uppercase pb-5 mb-5 border-b border-[#6E6893]">
                    Добавить Товар
                    {base64}
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
                    <div className="bg-white rounded-md p-7 ">
                        <div className="r flex justify-between">
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

                            <div className="my-[20px]">
                                <label htmlFor="fileInput" className="rounded-md py-3 bg-[#6D5BD0] flex items-center justify-center text-center text-white w-full h-full hover:bg-transparent hover:text-[#6D5BD0]">
                                    Добавить Изображение
                                    <input
                                        type="file"
                                        id="fileInput"
                                        name="avatar"
                                        accept="image/*"
                                        onChange={onFileChange}
                                        onClick={onClick}
                                        className="invisible text-[0px] absolute"
                                    />
                                </label>
                            </div>
                            {base64 && (

                                // @ts-ignore
                                <Image src={base64} width={300} height={400} alt="Uploaded Image" />
                            )}
                        </div>
                    </div>
                        {file && (
                            <div className="relative w-fit mx-auto">
                                <img
                                    alt="not found"
                                    width={"250px"}

                                    // @ts-ignore
                                    src={URL.createObjectURL(file)}
                                    className="relative top-0 left-0"
                                />
                                <button onClick={() => setFile('')}
                                        className="absolute flex items-center justify-center w-full h-full bg-neutral-900/50 top-0 opacity-0 hover:opacity-100 hover:cursor-pointer z-10"
                                ><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.5334 17.45L20 20.9833L16.45 17.45L14.1 19.8L17.65 23.3333L14.1167 26.8667L16.4667 29.2167L20 25.6833L23.5334 29.2167L25.8834 26.8667L22.35 23.3333L25.8834 19.8L23.5334 17.45ZM25.8334 6.66667L24.1667 5H15.8334L14.1667 6.66667H8.33337V10H31.6667V6.66667H25.8334ZM10 31.6667C10 33.5 11.5 35 13.3334 35H26.6667C28.5 35 30 33.5 30 31.6667V11.6667H10V31.6667ZM13.3334 15H26.6667V31.6667H13.3334V15Z" fill="white"/>
                                </svg>
                                </button>
                            </div>
                        )}
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
                            Добавить Товар
                        </BaseButton>
                    </div>
                </form>
            </div>
        </div>
    )
}
const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
export default AddModal;
