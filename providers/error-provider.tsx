"use client";

import {type FC, useEffect, useState} from 'react';
import ErrorPopup from "../components/ErrorPopup";

const ErrorProvider: FC = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect((): void => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <ErrorPopup/>
        </>
    );
};

export default ErrorProvider;