import * as Keychain from 'react-native-keychain';

const storeCredential = async(userName,Password)=>{
await Keychain
    .setGenericPassword(userName, Password)
    .then(function() {
      console.log('Credentials saved successfully!');
    });
}
const retreiveCredential = async()=>{
    try {
        // Retrieve the credentials
        let cred = {};
        const credentials = await Keychain.getGenericPassword();
        return credentials.password;
    }catch(e){
        return {}
    }
}
const removeCredential = async() =>{
    await Keychain.resetGenericPassword()
}    

export {storeCredential,retreiveCredential,removeCredential};
  