import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider, Appbar, Button } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    version: 3,
    mode: "exact",
    colors: {
        ...DefaultTheme.colors,
        primary: "#09af00",
        secondary: "#09af00"
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 1.5 * Constants.statusBarHeight,
        marginHorizontal: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        marginVertical: 0.5 * Constants.statusBarHeight
    },
    bottom: {
        backgroundColor: "#09af00",
    }
});

const Main = () => {
    return (
        <PaperProvider theme={theme}>
            <Appbar.Header elevated dark style={styles.bottom}>
                <Appbar.Content title="Start Your Grindset" color="white" />
            </Appbar.Header>
            <View style={styles.container}>
                <Button mode="contained" compact>Click Me</Button>
            </View>
        </PaperProvider>
        
    );
};

export default Main;
