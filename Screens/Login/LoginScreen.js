import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../../firebase_config";

const auth = getAuth(firebase);
let user = auth.currentUser;

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const login = userCredentials.user;
          user = auth.currentUser;
          navigation.replace("Navigator") ;
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, width: "100%", backgroundColor: "white" }}
      keyboardShouldPersistTaps="always"
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.logo}>
            <Image
              source={{
                uri: "https://uspto.report/TM/90307472/mark.png",
                height: 150,
                width: 220,
              }}
            />
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholderTextColor="#444"
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={true}
            />
          </View>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#444"
            placeholder="Password: Min 6 characters"
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
        </View>

        <Pressable titleSize={20} style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}> Log In </Text>
        </Pressable>

        <View style={styles.signupContainer}>
          <Text>Don't have an account?</Text>
          <Pressable>
            <Text
              style={{ fontWeight: "bold", color: "dodgerblue" }}
              onPress={() => navigation.navigate("SignUp")}
            >
              {" "}
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  container: {
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  wrapper: {
    marginTop: 80,
  },
  input: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#0096F6",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
});
