import { Alert } from 'react-native';

interface AlertProps {
  title: string;
  subtitle: string;
  rightButtonText?: string;
  rightButtonAction?(): void;
}

export default function dispatchCustomAlert({
  title,
  subtitle,
  rightButtonText,
  rightButtonAction,
}: AlertProps) {
  return Alert.alert(
    title,
    subtitle,
    [{ text: rightButtonText, onPress: rightButtonAction }],
    { cancelable: true }
  );
}
