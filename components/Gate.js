import React, { useState } from "react";
import { Text, View } from "react-native";

const Gate = () => {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            {isLogged ? <Text>is Logged</Text> : <Text>Login Please !!</Text>}
        </View>
    );
};

export default Gate;
