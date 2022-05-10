import {createContext, Dispatch, SetStateAction, useState} from 'react';

type FormContextType = {
    urlParsed: boolean;
    setUrlParsed: Dispatch<SetStateAction<boolean>>;
}

export const FormContext = createContext<FormContextType>({urlParsed: false, setUrlParsed: () => {}});

export function FormProvider({children}: {children: React.ReactNode}) {
    const [urlParsed, setUrlParsed]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    return (
        <FormContext.Provider value={{urlParsed, setUrlParsed}}>
            {children}
        </FormContext.Provider>
    );
}