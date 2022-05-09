import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import React, {useCallback, useEffect, useState} from "react";

export function ReCaptchaExecutor({inputId}: { inputId: string }) {
    const [currentElement, setCurrentElement] = useState<HTMLInputElement | null>(null);
    const {executeRecaptcha} = useGoogleReCaptcha();

    // // You can use useEffect to trigger the verification as soon as the component being loaded
    useEffect(() => {
        if (currentElement && executeRecaptcha) {
            const form = currentElement.closest('form');

            form?.addEventListener('submit', async (event: SubmitEvent) => {
                event.preventDefault();
                event.stopPropagation();

                currentElement.value = await executeRecaptcha('submit');
                form?.submit();
            });
        }
    }, [currentElement, executeRecaptcha, inputId]);

    const handleRefChange = useCallback((node: HTMLInputElement | null) => {
        setCurrentElement(node);
    }, []);

    return (
        <input
            id="recaptcha-token"
            name="recaptcha-token"
            type="hidden"
            ref={handleRefChange}>
        </input>
    );
}