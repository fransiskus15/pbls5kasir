import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TransactionListScreen = () => {
    const transactions = [
        { name: 'Ralph Edwards', date: '10 Okt', amount: 'Rp 25.000' },
        { name: 'Title list', date: '09 Okt', amount: 'Rp 40.000' },
        { name: 'Dianne Russell', date: '08 Okt', amount: 'Rp 100.000' },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Daftar Transaksi</Text>
            </View>

            {/* Transaction List */}
            <View style={styles.transactionList}>
                {transactions.map((transaction, index) => (
                    <View key={index} style={styles.transactionItem}>
                        {/* Icon */}
                        <View style={styles.iconContainer}>
                            <Text style={styles.icon}>↓</Text>
                        </View>
                        {/* Details */}
                        <View style={styles.details}>
                            <Text style={styles.name}>{transaction.name}</Text>
                            <Text style={styles.date}>{transaction.date}</Text>
                        </View>
                        {/* Amount */}
                        <Text style={styles.amount}>{transaction.amount}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative',
    },
    backArrowContainer: {
        position: 'absolute',
        left: 0,
    },
    backArrow: {
        fontSize: 18,
        color: '#000',
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4A4A4A',
        textAlign: 'center',
    },
    transactionList: {
        marginTop: 10,
    },
    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        elevation: 3,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E9F8FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    icon: {
        fontSize: 30,
        color: '#32A7E2',
        fontWeight: 'bold',

    },
    details: {
        flex: 1,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4A4A4A',
    },
    date: {
        fontSize: 12,
        color: '#9A9A9A',
        marginTop: 2,
    },
    amount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4A4A4A',
    },
});

export default TransactionListScreen;
