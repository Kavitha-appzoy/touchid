import AsyncStorage from "@react-native-community/async-storage";

 const storeUserLoginState = async(userState) =>  {
    try {
      await AsyncStorage.setItem('userState', userState);
      console.log("Data saved successfully");
      // Rest of your code
    } catch (error) {
      console.log("Error");
    }
  }
  
  const retrieveUserLoginState = async() =>  {
    try {
      const userState = await AsyncStorage.getItem('userState');
      if (userState !== null) {
        console.log("Session token",userState );
        return userState;
      }
     } catch (error) {
       console.log("Error");
     }
  }