import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"

const UpcomingWeather = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>UpcomingWeather</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default UpcomingWeather
