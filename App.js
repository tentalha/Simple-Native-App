import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Add from "./components/Add/Add";
import List from "./components/List/List";


export default function App() {
  const [list, setList] = useState([]);

  const addToList = (item) => {
    setList([...list, { id: list.length, text: item }]);
  }

  const deleteFromList = (itemId) => {
    const newList = list.filter(item => item.id !== itemId)
    setList(newList);
  }

  return (
    <View style={styles.appContainer}>
      <Add addToList={addToList} />
      <List list={list} deleteFromList={deleteFromList} />
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 50
  },
})

