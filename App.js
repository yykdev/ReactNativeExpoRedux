import React, { useState } from "react";

import { Text } from "react-native";

import { AppLoading } from "expo";

export default function App() {
    const [isReady, setIsReady] = useState(false);

    const handleStartAsync = () => {};
    const handleOnFinish = () => {
        setIsReady(true);
    };

    return isReady ? (
        <Text>Ready!!</Text>
    ) : (
        <AppLoading
            startAsync={handleStartAsync}
            onError={console.error}
            onFinish={handleOnFinish}
        />
    );
}
