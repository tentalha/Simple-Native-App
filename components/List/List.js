import { FlatList, Text, View } from "react-native";
import { styles } from "./ListStyles";

const List = ({ list, deleteFromList }) => {
    return (
        <View style={styles.listContainer}>
            {
                list.length > 0
                    ?
                    <>
                        <Text Text style={styles.listText}>Here the list goes......</Text>
                        <FlatList
                            data={list}
                            renderItem={({ item, index }) => {
                                console.log(index)
                                return <Text style={styles.listItem}
                                    onPress={() => deleteFromList(item?.id)}>
                                    {index + 1}.  {item?.text}
                                </Text>
                            }}
                            keyExtractor={item => item?.id}
                        />
                    </>
                    :
                    <Text Text style={styles.listText}>Oh Noes ! Nothing to show.</Text>
            }
        </View >
    )
}

export default List