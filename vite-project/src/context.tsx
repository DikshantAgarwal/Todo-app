import { useContext, createContext, useState } from 'react';

type cell = {
    todo: string[];
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    handleTodoInput: () => void
}
const Context = createContext<cell | null>(null);
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [todo, setTodo] = useState<string[]>([]);
    const [text, setText] = useState<string>('');
    const handleTodoInput = () => {
        setText('');
        setTodo([...todo, text]);
    }

    return <Context.Provider value={{ text, setText, handleTodoInput, todo }}>{children}</Context.Provider>
}

export const useMainContext = () => {
    const usecontext = useContext(Context)

    if (!usecontext) {
        throw new Error('Not Wrapped')
    }
    return usecontext
}
