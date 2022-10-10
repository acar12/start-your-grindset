import Constants from 'expo-constants';
import { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider, Appbar, Button, Card, Title } from 'react-native-paper';

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
    bottom: {
        backgroundColor: "#09af00",
    },
    container: {
        marginVertical: 1.5 * Constants.statusBarHeight,
        marginHorizontal: Constants.statusBarHeight,
        display: "flex",
        flexGrow: 1,
        flexShrink: 1,
    },
    card: {
        marginBottom: 0.5 * Constants.statusBarHeight,
        flexGrow: 1,
        display: "flex"
    },
    cardContent: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center"
    },
    quoteText: {
        fontWeight: "500",
        fontSize: 28,
        textAlign: "center"
    },
    button: {
        flexGrow: 0
    }
});

const quotesArr = [
    "Remember, there's always someone out there who's better than you. It's me.",
    "Life's like a sandwich. The bread comes first.",
    "Steve Jobs was 21 when he started Apple. Gates was 20 when he started Microsoft. It's too late, give up.",
    "The sound of police sirens is the alarm clock telling you that you have acheived success.",
    "Not gonna lie, some of you deserve the stuff you are going through.",
    "My favorite workout is running away from my problems.",
    "I like responsibility like my taxes, I evade them.",
    "Don't let anyone ruin your day! It's your day, ruin it yourself.",
    "I learn from the mistakes of people who take my advice.",
    "Yeah, my clothes stink. The only thing I launder is my money.",
    "If you can't become the hero in your own story, become the villain in somebody else's.",
    "My greatest acheivement is that I'm no one's favorite person.",
    "When someone tries to bring you down, they were already below you.",
    "Silence your enemies with your success.",
    "Being broke is part of the journey. Staying broke is your fault.",
    "Borrow enough money from the bank to buy the bank, then keep the money."
];

const Main = () => {
    const [index, setIndex] = useState(Math.floor(Math.random() * 16));
    const nextQuote = () => setIndex((index + 1) % quotesArr.length);

    return (
        <PaperProvider theme={theme}>
            <Appbar.Header elevated dark style={styles.bottom}>
                <Appbar.Content title="Start Your Grindset" color="white" />
            </Appbar.Header>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content style={styles.cardContent}>
                        <Text style={styles.quoteText}>
                            { quotesArr[index] }
                        </Text>
                    </Card.Content>
                </Card>
                <Button mode="elevated" textColor="black" 
                    compact style={styles.button} onPress={nextQuote}>Next Quote</Button>
            </View>
        </PaperProvider>
        
    );
};

export default Main;
