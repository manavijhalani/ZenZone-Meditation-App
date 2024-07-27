import {Slot,Tabs} from 'expo-router';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function TabsLayout() {
  return(
    <Tabs screenOptions=
    {{headerShown:false, 
        tabBarActiveTintColor:Colors.primary,
    }}>
        <Tabs.Screen name="nature-meditate" options={{tabBarLabel:'Meditate', tabBarIcon:({color})=>(<MaterialCommunityIcons name="flower-tulip" size={24} color="black" />)
    
    }}/>
    <Tabs.Screen name="affirmations" options={{tabBarLabel:'Affirmations', tabBarIcon:({color})=>(<Feather name="book-open" size={24} color="black" />)
    
}}/>
    </Tabs>
  );
}