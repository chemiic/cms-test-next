"use client";

import {type FC, useEffect, useState} from 'react';
import AddModal from "../components/modals/AddModal";
import EditModal from "../components/modals/EditModal";

const ModalProvider: FC = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect((): void => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <EditModal/>
            <AddModal/>
        </>
    );
};

export default ModalProvider;