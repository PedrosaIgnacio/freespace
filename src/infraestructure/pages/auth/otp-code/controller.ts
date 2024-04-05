import {  useRef, useState } from "react"


export default function useController() {

    const [otpCode, setOtpCode] = useState<{[keyof: string]: string}>({
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
    })
    const [pasted, setPasted] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<string>('1');
    const refs = useRef(Array(6).fill({})).current;

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.metaKey && event.key === 'v') {
            // Ctrl+V pressed
            console.log('User pasted content.');
            setPasted(true);
        }
        else {
            setPasted(false);
        }
    };

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(parseInt(target.value))) {
            if (target.value.length > 1) {
                if (pasted) {
                    const splitedNumber = target.value.split('');
                    splitedNumber.map((value, ind) => {
                        setOtpCode(otpCode => ({
                            ...otpCode,
                            [parseInt(target.name.split('-')[target.name.split("-").length - 1]) + ind]: value
                        }))
                    })
                    const nextInd = (parseInt(target.name.split('-')[target.name.split("-").length - 1]) + (splitedNumber.length - 1)).toString();
                    setCurrentIndex((parseInt(target.name.split('-')[target.name.split("-").length - 1]) + (splitedNumber.length - 1)).toString());
                    refs[parseInt(nextInd) - 1].focus();
                }
                else {
                    return;
                }
            }
            else {
                setOtpCode(otpCode => ({
                    ...otpCode,
                    [target.name.split('-')[target.name.split("-").length - 1]]: target.value
                }))
                const nextInd = (parseInt(target.name.split('-')[target.name.split("-").length - 1]) + 1).toString();
                setCurrentIndex((parseInt(target.name.split('-')[target.name.split("-").length - 1]) + 1).toString())
                refs[parseInt(nextInd) - 1].focus();
            }
        }
        else {
            setOtpCode(otpCode => ({
                ...otpCode,
                [target.name.split('-')[target.name.split("-").length - 1]]: ''
            }))
        }
    }

    return {
        handleChange,
        otpCode,
        handleKeyDown,
        inputRefs: refs,
    }

}