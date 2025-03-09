import { clearStorage, getLocalStorageItem, setLocalStorageItem } from "@/service/Storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { IAuthContext, IAuthUser } from "@/constant/interfaces";


const AUTH_KEY: string = 'auth'
const AuthContext = createContext<IAuthContext | null>(null);

interface AuthProviderProps {
    children: ReactNode
}
export function AuthProvider({ children }: AuthProviderProps) {
    const [auth, setAuth] = useState<IAuthUser | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadAuthState() {
            try {
                const storedAuth = await getLocalStorageItem(AUTH_KEY) as IAuthUser | null;
                setAuth(storedAuth);
            } catch (error) {
                console.error('Failed to load initial auth state: ', error);
            } finally {
                setIsLoading(false)
            }
        }

        loadAuthState();
    }, [])

    const login = async (userData: IAuthUser): Promise<boolean> => {
        try {
            await setLocalStorageItem(AUTH_KEY, userData);
            setAuth(userData)
            return true;
        } catch (error) {
            console.error('Login Failed: ', error);
            return false
        }
    }

    const logout = async (): Promise<boolean> => {
        try {
            await clearStorage();
            setAuth(null)
            return true;
        } catch (error) {
            console.error('Logout Failed: ', error)
            return false
        }
    }

    const value: IAuthContext = {
        auth,
        isLoading,
        login,
        logout,
        isAuthorize: !!auth
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider.');
    }

    return context;
}