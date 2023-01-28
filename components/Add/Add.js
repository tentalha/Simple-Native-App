import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './AddStyles';

const Add = ({ addToList }) => {
    const [input, setInput] = useState();

    const handleOnPress = () => {
        input && addToList(input);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Enter something' style={styles.input}
                onChangeText={(newText) => setInput(newText)} value={input}

            />
            <Button title='Add' style={styles.button} onPress={handleOnPress} disabled={!input} />
        </View>
    )
}

export default Add