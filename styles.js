import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#6200ea',
  accent: '#03dac6',
  background: '#f5f5f5',
  textPrimary: '#333333',
  textSecondary: '#666666',
  white: '#ffffff',
  gray: '#cccccc',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
