import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./MainStack";
import { useEffect } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";


export function AppNavigator() {
 const { initLanguage, isInitialized } = useLanguageStore();

 useEffect(() => {
   initLanguage();
 }, []);

 if (!isInitialized) return null;
  return (
    <NavigationContainer>
       <MainStack /> 
    </NavigationContainer>
  );
}
