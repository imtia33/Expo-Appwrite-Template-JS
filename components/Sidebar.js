import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Feather } from "@expo/vector-icons"

const Sidebar = ({ activeScreen }) => {
  const navigation = useNavigation()

  const menuItems = [
    { name: "Dashboard", icon: "home", screen: "Dashboard" },
    { name: "Posts", icon: "file-text", screen: "Posts" },
    { name: "Media", icon: "image", screen: "Media" },
    { name: "Users", icon: "users", screen: "Users" },
    { name: "Settings", icon: "settings", screen: "Settings" },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>WordPress Clone</Text>
      </View>
      <ScrollView style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={[styles.menuItem, activeScreen === item.screen && styles.activeMenuItem]}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Feather name={item.icon} size={20} color={activeScreen === item.screen ? "#fff" : "#555"} />
            <Text style={[styles.menuText, activeScreen === item.screen && styles.activeMenuText]}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: "#23282d",
    height: "100%",
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#32373c",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#32373c",
  },
  activeMenuItem: {
    backgroundColor: "#0073aa",
  },
  menuText: {
    color: "#eee",
    marginLeft: 15,
    fontSize: 16,
  },
  activeMenuText: {
    color: "#fff",
    fontWeight: "bold",
  },
})

export default Sidebar
