export interface RegisterProps {
    setRegister: React.Dispatch<React.SetStateAction<boolean>>;
    signUp: (userObject: any) => Promise<void>;
}