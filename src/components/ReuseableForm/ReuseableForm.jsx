import { Children } from "react";

const ReuseableForm = ({FormTitle,handleSubmit,submitBtnText = "Submit",children}) => {

    const handleLocalSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }
    return (
        <div>
            <h2>{children}</h2>
             <form onSubmit={handleLocalSubmit}>
                <input placeholder='Enter' className='border' type="text" name="name" id="" />
                <input placeholder='Enter' className='border' type="email" name="email" id="" />
                <input placeholder='Enter' className='border' type="password" name="password" id="" />
                <input className='border' type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;