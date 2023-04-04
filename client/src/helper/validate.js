import toast  from "react-hot-toast"

/** validate login page username**/
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors;
}

/** validate Pasword page username**/
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors
}

/** validate Reset Pasword page username**/
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.comfirm_pwd){
        errors.exist = toast.error("Password doesn't match..!")
    }
}

/** validate Password **/
function passwordVerify(errors = {}, values){

    const specialChars = /[\W_]/g
    if(!values.password){
        errors.password = toast.error("Password Required..!");
    }else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password..!")
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 characters long..!")
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special characters ..!")
    }

    return errors
}

/** validate username **/
function usernameVerify(errors = {}, values){
    if(!values.username){
        errors.username = toast.error("Username Required..!")
    }else if(values.username.includes(" ")){
        errors.username = toast.error("Invarid Username..!")
    }

    return errors
}