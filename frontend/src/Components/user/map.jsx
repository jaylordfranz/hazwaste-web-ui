import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import * as Location from "expo-location";

const wasteDisposalSites = [
  { 
    id: 1, 
    name: "E-Waste Zero Bin", 
    latitude: 14.561, 
    longitude: 121.048,
    address: "Fourth Floor, AC Energy, 6789, Ayala Ave, Makati, 1206 Metro Manila"
  },
  { 
    id: 2, 
    name: "Garbie Waste Management", 
    latitude: 14.560, 
    longitude: 121.043,
    address: "1234 Solid Waste Road, Taguig, Metro Manila"
  },
  { 
    id: 3, 
    name: "Trash To Cashback", 
    latitude: 14.564, 
    longitude: 121.050,
    address: "Building 5, Maginhawa St, Quezon City, Metro Manila"
  },
  { 
    id: 4, 
    name: "Pineda Materials Recovery", 
    latitude: 14.563, 
    longitude: 121.055,
    address: "Unit 3, Pineda Ave, Pasig, Metro Manila"
  },
  { 
    id: 5, 
    name: "Waste Recovery Company", 
    latitude: 14.567, 
    longitude: 121.060,
    address: "4th St., Taguig Industrial Park, Taguig, Metro Manila"
  },
];

const MapScreen: React.FC = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [address, setAddress] = useState<string>("");
  const [nearbySites, setNearbySites] = useState<any[]>([]);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Enable location services to proceed.");
      return;
    }
    let userLocation = await Location.getCurrentPositionAsync({});
    setLocation(userLocation);
    getAddress(userLocation.coords.latitude, userLocation.coords.longitude);
    getNearbySites(userLocation.coords.latitude, userLocation.coords.longitude);
  };

  const getAddress = async (latitude: number, longitude: number) => {
    try {
      const result = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (result.length > 0) {
        const { city, region, country } = result[0];
        setAddress(`${city}, ${region}, ${country}`);
      }
    } catch (error) {
      console.error("Error fetching address: ", error);
    }
  };

  const getNearbySites = (latitude: number, longitude: number) => {
    const nearby = wasteDisposalSites
      .map((site) => {
        const distance = getDistance(latitude, longitude, site.latitude, site.longitude);
        return { ...site, distance };
      })
      .filter((site) => site.distance < 10); 
    setNearbySites(nearby);
  };

  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Waste Disposal Locations</Text>

      <Text style={styles.label}>Current Location:</Text>
      {location ? (
        <>
          <Text style={styles.location}>{address || "Fetching address..."}</Text>
          {nearbySites.length > 0 ? (
            <FlatList
              data={nearbySites}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.siteCard}>
                  <Text style={styles.siteName}>{item.name}</Text>
                  <Text style={styles.siteDetails}>
                    {`Latitude: ${item.latitude}, Longitude: ${item.longitude}`}
                  </Text>
                  <Text style={styles.siteDetails}>
                    {`Distance: ${item.distance.toFixed(2)} km`}
                  </Text>
                  <Text style={styles.siteDetails}>Address: {item.address}</Text>
                </View>
              )}
            />
          ) : (
            <Text style={styles.placeholder}>No nearby sites within 10 km</Text>
          )}
        </>
      ) : (
        <Text style={styles.placeholder}>Fetching location...</Text>
      )}

      <TouchableOpacity style={styles.locationButton} onPress={getLocation}>
        <Text style={styles.buttonText}>Get Current Location</Text>
      </TouchableOpacity>

      {address ? <Text style={styles.address}>Address: {address}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "orange",
    textAlign: "center",
  },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  placeholder: { color: "#888", marginTop: 5, textAlign: "center" },
  siteCard: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    marginBottom: 10,
    borderRadius: 5,
  },
  siteName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  siteDetails: {
    fontSize: 14,
    color: "#555",
  },
  locationButton: {
    backgroundColor: "#FF5733",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  address: { marginTop: 10, fontSize: 16 },
  location: { fontSize: 14, marginTop: 10, color: "#333" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default MapScreen;






// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from "react-native";
// import MapView, { Marker, Polyline } from "react-native-maps";
// import * as Location from "expo-location";
// import { getDistance } from "geolib";

// const wasteDisposalSites = [
//   { id: 1, name: "E-Waste Zero Bin", latitude: 14.561, longitude: 121.048, hours: "8:00 AM - 5:00 PM" },
//   { id: 2, name: "Garbie Waste Management", latitude: 14.560, longitude: 121.043, hours: "9:00 AM - 6:00 PM" },
//   { id: 3, name: "Trash To Cashback", latitude: 14.564, longitude: 121.050, hours: "8:00 AM - 4:00 PM" },
//   { id: 4, name: "Pineda Materials Recovery", latitude: 14.563, longitude: 121.055, hours: "7:00 AM - 5:00 PM" },
//   { id: 5, name: "Waste Recovery Company", latitude: 14.567, longitude: 121.060, hours: "8:00 AM - 6:00 PM" },
// ];

// const MapScreen: React.FC = () => {
//   const [reportDetails, setReportDetails] = useState<string>("");
//   const [boatName, setBoatName] = useState<string>("");
//   const [location, setLocation] = useState<Location.LocationObject | null>(null);
//   const [address, setAddress] = useState<string>("");
//   const [selectedSite, setSelectedSite] = useState<{ name: string; latitude: number; longitude: number; hours: string } | null>(null);
//   const [distance, setDistance] = useState<number | null>(null); 
//   const [status, setStatus] = useState<string>(""); 

//   useEffect(() => {
//     getLocation();
//   }, []);

//   const getLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission Denied", "Enable location services to proceed.");
//       return;
//     }
//     let userLocation = await Location.getCurrentPositionAsync({});
//     setLocation(userLocation);
//     getAddress(userLocation.coords.latitude, userLocation.coords.longitude);
//   };

//   const getAddress = async (latitude: number, longitude: number) => {
//     try {
//       const result = await Location.reverseGeocodeAsync({ latitude, longitude });
//       if (result.length > 0) {
//         const { city, region, country } = result[0];
//         setAddress(`${city}, ${region}, ${country}`);
//       }
//     } catch (error) {
//       console.error("Error fetching address: ", error);
//     }
//   };

//   const handleSelectSite = (site: { name: string; latitude: number; longitude: number; hours: string }) => {
//     setSelectedSite(site);

//     if (location) {
 
//       const distanceInMeters = getDistance(
//         { latitude: location.coords.latitude, longitude: location.coords.longitude },
//         { latitude: site.latitude, longitude: site.longitude }
//       );
//       setDistance(distanceInMeters);
//     }

   
//     checkIfOpen(site.hours);
//   };

//   const checkIfOpen = (hours: string) => {
//     const currentHour = new Date().getHours(); 
//     const [openTime, closeTime] = hours.split(" - ").map((time) => {
//       const [hour, minute] = time.split(":");
//       return { hour: parseInt(hour), minute: parseInt(minute) };
//     });

//     if (currentHour >= openTime.hour && currentHour < closeTime.hour) {
//       setStatus("Open");
//     } else {
//       setStatus("Closed");
//     }
//   };

//   const handleReportSubmit = () => {
//     Alert.alert("Success", "Waste report submitted!");
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <Text style={styles.title}>Waste Disposal Locations</Text>

//         <Text style={styles.label}>Location:</Text>
//         {location ? (
//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: location.coords.latitude,
//               longitude: location.coords.longitude,
//               latitudeDelta: 0.01,
//               longitudeDelta: 0.01,
//             }}
//           >
//             <Marker
//               coordinate={{
//                 latitude: location.coords.latitude,
//                 longitude: location.coords.longitude,
//               }}
//               title="You are here"
//               pinColor="red"
//             />

//             {wasteDisposalSites.map((site) => (
//               <Marker
//                 key={site.id}
//                 coordinate={{ latitude: site.latitude, longitude: site.longitude }}
//                 title={site.name}
//                 pinColor="orange"
//                 onPress={() => handleSelectSite(site)}
//               />
//             ))}

         
//             {selectedSite && location && (
//               <Polyline
//                 coordinates={[
//                   { latitude: location.coords.latitude, longitude: location.coords.longitude },
//                   { latitude: selectedSite.latitude, longitude: selectedSite.longitude },
//                 ]}
//                 strokeColor="blue"
//                 strokeWidth={4}
//               />
//             )}
//           </MapView>
//         ) : (
//           <Text style={styles.placeholder}>Fetching location...</Text>
//         )}

//         <TouchableOpacity style={styles.locationButton} onPress={getLocation}>
//           <Text style={styles.buttonText}>Get Current Location</Text>
//         </TouchableOpacity>

//         {address ? <Text style={styles.address}>Address: {address}</Text> : null}

//         {selectedSite && (
//           <View style={styles.selectedSiteContainer}>
//             <Text style={styles.selectedSiteTitle}>Selected Site:</Text>
//             <Text style={styles.selectedSiteText}>Name: {selectedSite.name}</Text>
//             <Text style={styles.selectedSiteText}>Latitude: {selectedSite.latitude}</Text>
//             <Text style={styles.selectedSiteText}>Longitude: {selectedSite.longitude}</Text>
//             {distance !== null && (
//               <Text style={styles.selectedSiteText}>
//                 Distance: {(distance / 1000).toFixed(2)} km
//               </Text>
//             )}
//             <Text style={styles.selectedSiteText}>Operating Hours: {selectedSite.hours}</Text>
//             <Text style={styles.selectedSiteText}>Status: {status}</Text>
//           </View>
//         )}

//         <TouchableOpacity style={styles.submitButton} onPress={handleReportSubmit}>
//           <Text style={styles.buttonText}>Submit Waste</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   scrollContent: { padding: 20, paddingBottom: 100 },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "orange",
//     textAlign: "center",
//   },
//   label: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 5,
//     width: "100%",
//   },
//   placeholder: { color: "#888", marginTop: 5, textAlign: "center" },
//   map: { width: "100%", height: 300, marginTop: 10 },
//   locationButton: {
//     backgroundColor: "#FF5733",
//     padding: 12,
//     borderRadius: 5,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   address: { marginTop: 10, fontSize: 16 },
//   selectedSiteContainer: {
//     marginTop: 20,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 5,
//     backgroundColor: "#f9f9f9",
//   },
//   selectedSiteTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//     color: "#333",
//   },
//   selectedSiteText: { fontSize: 16, color: "#555" },
//   submitButton: {
//     backgroundColor: "#FF5733",
//     padding: 12,
//     borderRadius: 5,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
// });

// export default MapScreen;
