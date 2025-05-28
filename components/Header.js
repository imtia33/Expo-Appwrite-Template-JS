"use client"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useAuth } from "../context/AuthContext"

const Header = ({ title, showMenu, toggleMenu }) => {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <View style={styles.container}>
      {showMenu && (
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Feather name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.userButton}>
          <Feather name="user" size={20} color="#fff" />
          <Text style={styles.userName}>{user?.name || "User"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Feather name="log-out" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#23282d",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  menuButton: {
    padding: 5,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 15,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  userName: {
    color: "#fff",
    marginLeft: 8,
  },
  logoutButton: {
    padding: 5,
  },
})

export default Header
