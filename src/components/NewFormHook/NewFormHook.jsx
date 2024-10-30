import useInputState from "../../hooks/FormHookState";

const NewFormHook = () => {
    const emailState = useInputState();
    const passWordState = useInputState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form Data: ", emailState.value);
        console.log("form Data: ", passWordState.value);
    } 
    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} placeholder='Enter' className='border' type="text" name="name" id="" /> */}
                <input {...emailState}  placeholder='Enter' className='border' type="email" name="email" id="" />
                <input {...passWordState} placeholder='Enter' className='border' type="password" name="password" id="" />
                <input className='border' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default NewFormHook;