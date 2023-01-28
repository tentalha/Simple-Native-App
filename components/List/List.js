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
                            renderItem={item => {
                                return <Text style={styles.listItem}
                                    onPress={() => deleteFromList(item?.item?.id)}>
                                    {item?.item?.id + 1}.  {item?.item?.text}
                                </Text>
                            }}
                            keyExtractor={item => item?.id}
                        />
                    </>
                    :
                    <Text Text style={styles.listText}>Oh Noees ! Nothing to show.</Text>
            }
        </View >
    )
}

export default List