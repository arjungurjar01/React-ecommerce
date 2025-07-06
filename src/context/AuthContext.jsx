import { createContext, useContext, useEffect, useState } from "react";
import { supabaseClient } from "../supabaseClient";

export const AuthContext = createContext() ;

export const AuthProvider = ({children}) =>{
    const [currentState,setCurrentState] = useState('Sign Up');
    const [loading, setLoading] = useState(true); 
    const[session,setSession] = useState('90');
    const user = session?.user ;
    const isProd = import.meta.env.MODE === "production";
    const redirectTo = isProd 
  ? "https://react-ecommerce-preview.vercel.app"
  : "http://localhost:5174";


    //signup
    const signUpNewUser = async(email,password,name)=>{
        try {
            const {data,error} = await supabaseClient.auth.signUp({
                email,
                password,
                options:{
                    data:{
                        name
                    }
                }
            }) ;
            
            if(error){
                console.log('error occur during signup :',error);
                return {success:false,error}
            }
    
            return {success:true,data}
        } catch (error) {
            console.log( 'signup error catch :',error.message) ;
        }
    }
    
    //signin
    const signInExistingUser = async(email,password)=>{
       try {
        const {data , error} = await supabaseClient.auth.signInWithPassword({
            email,
            password
        })
        if(error){
            console.log('error occur during signin :',error);
            return {success:false,error}
        }
        // console.log('sign in successfully:',data)
        return { success :true,data} ;

       } catch (error) {
          console.log('signin error catch : ',error.message)
       }
    }
    //google signin/signup
    const googleAuth = async() => {
        try {
            await supabaseClient.auth.signInWithOAuth({
            provider: "google" ,
                options:{
                redirectTo  
                }
           })  
        } catch (error) {
            console.log('erroe during google auth',error.message);
        }
    }

    // signout
    const signOut = async ()=>{
        try {
            const {error} = await supabaseClient.auth.signOut();
            if(error){
                console.log('error occur during signout :',error);
                return {success:false,error}
            }
        } catch (error) {
            
        }
    } 
   

    //useEffect
    useEffect(()=>{
        supabaseClient.auth.getSession(({data:{session}})=>{
            setSession(session)
        });

        supabaseClient.auth.onAuthStateChange((_event,session)=>{
            setSession(session)
        })
        setLoading(false);
    },[])
    

    return (
        <AuthContext.Provider value={{user,loading,currentState,setCurrentState,session,signUpNewUser , signInExistingUser , signOut ,googleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
   return useContext(AuthContext) 
}