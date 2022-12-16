import { createContext, useContext, useReducer, useEffect } from "react";
import {User} from "../types"
import Axios from "axios";

interface State {
   authenticated : boolean,
   user : User | undefined,
   loading : boolean
}


export const StateContext = createContext<State>({
   authenticated : false,
   user : undefined,
   loading : true
})

export const DispatchContext = createContext<any>(null);

interface Action {
   type: string,
   payload : any
}

const userReducer = (state: State, {type,payload}:Action) => {
   switch(type) {
      case "LOGIN" :
         return {
            ...state,
            authenticated : true,
            user : payload,
         }
      case "LOGOUT" :
         return {
            ...state,
            authenticated : false,
            user : undefined,
         }
      case "STOP_LOADING" :
         return {
            ...state,
            loading : false
         }
      default :
         throw new Error(`Unknown action type :${type}`)
   }
}


export const AuthProvider = ({children} : {children: React.ReactNode}) => {

   const [state, defaultDispatch] = useReducer(userReducer, {
      user: undefined,
      authenticated : false,
      loading : true
   })

   const dispatch = (type: string , payload?: any) => {
      defaultDispatch({type, payload})
   }

   useEffect(() => {
      async function loadUser() {
         try {
            const response = await Axios.get("/auth/me");
            dispatch("LOGIN", response.data)
         }catch(e) {
            console.log("loadUser",e)
         }finally {
            dispatch("STOP_LOADING");
         }
      }
      loadUser()
   }, [])

   return (
      <DispatchContext.Provider value={dispatch}>
         <StateContext.Provider value={state}>{children}</StateContext.Provider>
      </DispatchContext.Provider>
   )
}

export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);
