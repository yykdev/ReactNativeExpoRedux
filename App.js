import React, { useState } from "react";

import { Image } from "react-native";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import Gate from "./components/Gate";

export default function App() {
    const [isReady, setIsReady] = useState(false);

    const cachImages = (images) =>
        images.map((image) => {
            if (typeof image === "string") {
                return Image.prefetch(image);
            } else {
                return Asset.fromModule(image).downloadAsync();
            }
        });
    const cachFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

    const handleStartAsync = async () => {
        const images = [
            // require('./assets/...'),;
            // "https://.../.../logo.png",
        ];
        const fonts = [Ionicons.font];

        const cachImagesPromise = cachImages(images);
        const cachFontsPromise = cachFonts(fonts);

        return Promise.all([...cachImagesPromise, ...cachFontsPromise]);
    };
    const handleOnFinish = () => setIsReady(true);

    return isReady ? (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Gate />
            </PersistGate>
        </Provider>
    ) : (
        <AppLoading
            startAsync={handleStartAsync}
            onError={console.error}
            onFinish={handleOnFinish}
        />
    );
}
