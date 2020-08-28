import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logOut, logIn } from "../redux/userSlice";

export default () => {
    const { isLogged } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            {isLogged ? (
                <TouchableOpacity onPress={() => dispatch(logOut())}>
                    <Text>is Logged</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    onPress={() => dispatch(logIn({ token: "test.token" }))}
                >
                    <Text>Login Please !!</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
