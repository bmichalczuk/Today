import {useState, useEffect} from "react";
import {authObserver} from "../firebase/utils";


const useUser = () => {
    const [user, setUser] = useState<any>()

    const observer = authObserver((user: any) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    })

    useEffect(() => {
       const unsubscribe =  observer();
       return unsubscribe;
    }, [user, observer]);
    return user
};

export default useUser;