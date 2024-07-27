import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import beachImage from '@/assets/meditation-images/beach.webp'; // Make sure the path is correct
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router=useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={beachImage} style={styles.image} resizeMode='cover'>
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
        >
          <SafeAreaView style={styles.safearea}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Mindful Meditation</Text>
              <Text style={styles.sub}>Simplifying meditation for everyone</Text>
            </View> 
            <View style={styles.buttonContainer}>
              <CustomButton onPress={()=>router.push("/nature-meditate")} title="Get started"/>
            </View>
            <StatusBar style="light"/>

          </SafeAreaView> 
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  safearea: {
    width: '100%',
    marginHorizontal:5,
    marginVertical:12
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20, // Adjust this value to move the text down from the top
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  sub: {
    marginTop: 10,
    color: "white",
    fontSize: 20,
    textAlign: 'center',
  },
  
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop:400
},
});
