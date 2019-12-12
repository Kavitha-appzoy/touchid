import RSAKey from "react-native-rsa";
const bits = 1024;
const exponent = '10001'; // must be a string
var rsa = new RSAKey();
var r = rsa.generate(bits, exponent);
var publicKey = rsa.getPublicString(); // return json encoded string
var privateKey = rsa.getPrivateString();  // return json encoded string
var encryptDecrpyObject = new RSAKey();
export {publicKey,privateKey,encryptDecrpyObject};


