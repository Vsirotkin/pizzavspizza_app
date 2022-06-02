import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, Button, Image } from "react-native";


class ListView extends Component {
    render() {
        const myText = 'CodeWithMe'
        return (
            <SafeAreaView style={styles.center}>
                <Image style={styles.pizzaImage}
                source={{
                    uri: 'https://www.freepngimg.com/thumb/pizza/6-pizza-png-image-thumb.png'}}
                />
                <Text style={styles.baseText}>Pizza vs. Pizza App</Text>
                <Text style={styles.newText}>{myText}</Text>
                <Text style={styles.title}>List View</Text>
                <Button
                    title="list Item, Click for Details"
                    onPress={() => this.props.navigation.navigate("Detail")}
                 />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
    baseText: {
        color: "navy",
        fontSize: 30,
        fontStyle: "italic",
    },
    myText: {
      color: 'red',
    },
    pizzaImage: {
      width: 200,
      height: 200,
    },
});

export default ListView;
