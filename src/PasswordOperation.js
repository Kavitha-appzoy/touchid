import { encryptDecrpyObject,publicKey,privateKey } from "./RsaKeys";

const encryptPassword =(userPassword) => {
    
    encryptDecrpyObject.setPublicString(publicKey);
    return encryptDecrpyObject.encrypt(userPassword);
     
};

const decryptPassword = (encrypted) => {
    encryptDecrpyObject.setPrivateString(privateKey);
    var decryptedPassword = encryptDecrpyObject.decrypt(encrypted); 
    return decryptedPassword;
};

export {encryptPassword,decryptPassword};