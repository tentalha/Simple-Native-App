import { Text, View } from "react-native"
import { styles } from "./ListStyles"

const List = ({ list }) => {
    return (
        <View style={styles.listContainer}>
            {
                list.length > 0
                    ?
                    <Text Text style={styles.listText}>Here the list goes......</Text>
                    :
                    <Text Text style={styles.listText}>Oh Noees ! Nothing to show.</Text>
            }
        </View >
    )
}

export default List