import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        alignItems: 'center'
    },
    input: {
        borderWidth: 2,
        width: "80%",
        height: 40,
        borderRadius: 8,
        borderColor: 'dodgerblue',
        paddingHorizontal: 10,
        marginRight: 10
    },
    button: {
        borderRadius: 8,
    }
});
