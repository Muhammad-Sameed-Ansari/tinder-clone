import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';
import StackNavigator from './StackNavigator';

export default function App() {
    return (
        <NavigationContainer>
            {/* HOC - Higher Order Component */}
            <AuthProvider>
                {/* Passes down the cool auth stuff to childern... */}
                <StackNavigator />
            </AuthProvider>
        </NavigationContainer>
    );
}