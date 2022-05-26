import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#00000032',
    marginHorizontal: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  restaurantCard: {
    width: "100%",
    marginVertical: 16,
    backgroundColor: "#fff",
    color: "#444",
    borderRadius: 4,
  },
  restaurantsName: {
    marginHorizontal: 12,
    fontSize: 24,
    fontWeight: "600",
    marginTop: 15,
  },
  cuisine: {
    marginWidth: "100%",
    fontSize: 16,
    fontWeight: "100",
    color: "#ff3333",
  },
  address: {
    marginWidth: "100%",
    fontSize: 14,
    fontWeight: "300",
    color: "#303030",
  },
});
