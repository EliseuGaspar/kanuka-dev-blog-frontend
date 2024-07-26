import { createContext, useState, ReactNode, useContext } from 'react';

interface StateContextType {
    status: 'active' | 'deactive';
    toggleStatus: (newStatus: 'active' | 'deactive') => void;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider = ({ children }: { children: ReactNode }) => {
    const [status, setStatus] = useState<'active' | 'deactive'>('active');

    const toggleStatus = (newStatus: 'active' | 'deactive') => {
        setStatus(newStatus);
    };

    return (
        <StateContext.Provider value={{ status, toggleStatus }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
};
