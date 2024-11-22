import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const transactions = [
  { id: '1', name: 'Samantha', date: 'Nov 17', amount: '326.800' },
  { id: '2', name: 'Samantha', date: 'Nov 17', amount: '326.800' },
  { id: '3', name: 'Samantha', date: 'Nov 17', amount: '326.800' },
  { id: '4', name: 'Samantha', date: 'Nov 17', amount: '326.800' },
  { id: '5', name: 'Samantha', date: 'Nov 17', amount: '326.800' },
];

const BalanceScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require('@/assets/images/usd-circle.png')} // Ganti dengan URL gambar profil
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hi, Gros Prima</Text>
            <Text style={styles.date}>Rabu, Feb 14, 2024</Text>
          </View>
        </View>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo Anda</Text>
        <Text style={styles.balance}>Rp 8.250.000</Text>
      </View>

      {/* Transactions Section */}
      <View style={styles.transactionContainer}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Transaksi</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>Lainnya</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Image
                source={require('@/assets/images/usd.png')} // Ganti dengan URL gambar ikon transaksi
                style={styles.transactionIcon}
              />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionName}>{item.name}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 45,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  balanceContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 30,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#5B5B5B',
  },
  balance: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1E1E1E',
    marginTop: 8,
  },
  transactionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 125,
    padding: 16,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  viewMore: {
    fontSize: 14,
    color: '#32A7E2',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    color: '#32E258FF',
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 14,
    fontWeight: '600',
  },
  transactionDate: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});

export default BalanceScreen;
