import { useEffect, useRef} from "react";

const FormReference = () => {
   const nameRef = useRef(null);
   const emailRef = useRef(null);
   const passRef = useRef(null);

   useEffect(() => {
    nameRef.current.focus();
   },[])


    const handleSubmit = (e) =>{
        e.preventDefault();
       console.log(nameRef.current.value);
       console.log(emailRef.current.value);
       console.log(passRef.current.value);
        
    }
    
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input ref={nameRef} placeholder='Enter' className='border' type="text" name="name" id="" />
                <input ref={emailRef} placeholder='Enter' className='border' type="email" name="email" id="" />
                <input ref={passRef} placeholder='Enter' className='border' type="password" name="password" id=""/>
                <input className='border' type="submit" value="Submit" />
            </form>
        
        </div>
    );
};

export default FormReference;