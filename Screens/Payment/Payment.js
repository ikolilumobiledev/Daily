import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = () => {
  const handlePayment = (paymentMethod) => {
    // Implement logic to handle payment with the selected payment method
    console.log(`Processing payment with ${paymentMethod}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Screen</Text>
      <View style={styles.paymentMethods}>
        <TouchableOpacity
          style={styles.paymentMethodButton}
          onPress={() => handlePayment('Credit Card')}
        >
          <Text style={styles.paymentMethodText}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethodButton}
          onPress={() => handlePayment('PayPal')}
        >
          <Text style={styles.paymentMethodText}>PayPal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethodButton}
          onPress={() => handlePayment('Google Pay')}
        >
          <Text style={styles.paymentMethodText}>Google Pay</Text>
        </TouchableOpacity>
        {/* Add more payment methods as needed */}
      </View>
      <TouchableOpacity style={styles.payButton} onPress={() => handlePayment('Other')}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  paymentMethodButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  paymentMethodText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
