import AsyncStorage from "@react-native-community/async-storage";

 const storeUserLoginState = async(userState) =>  {
    try {
      await AsyncStorage.setItem('userState', userState);
      console.log("Data saved successfully");
      // Rest of your code
    } catch (error) {
      console.log("Error while storing the token");
    }
  }
  
  
  /* Splash Screen  */ 
  const retrieveUserLoginState = async() =>  {
    try {
      const token = await AsyncStorage.getItem('userState');
      if (token !== null) {
        console.log("Session token",token );
        return token;
      }
     } catch (error) {
       console.log("Error while storing the token");
     }
  }