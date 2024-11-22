import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PaymentSuccessScreen = () => {
    return (
        <View style={styles.container}>
            {/* Icon Success */}
            <View style={styles.successIconContainer}>
                <Image
                    source={require('@/assets/images/success-icon.png')} // Ganti path dengan ikon ceklis
                    style={styles.successIcon}
                />
            </View>

            {/* Title */}
            <Text style={styles.title}>Pembayaran Berhasil</Text>

            {/* Payment Card */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Face Pay</Text>
                <View style={styles.cardContent}>
                    <Text style={styles.label}>Kode Transaksi</Text>
                    <Text style={styles.value}>X7PQ93ZL5N8T</Text>

                    <Text style={styles.label}>No. Referensi</Text>
                    <Text style={styles.value}>REF8473VJQ20</Text>

                    <Text style={styles.label}>Jenis Transaksi</Text>
                    <Text style={styles.value}>Transfer</Text>

                    <Text style={styles.label}>Tanggal Transaksi</Text>
                    <Text style={styles.value}>Nov 17, 2024, 09:30 WIB</Text>

                    {/* Items */}
                    <View style={styles.items}>
                        <Text style={styles.item}>1x Oreo</Text>
                        <Text style={styles.itemPrice}>Rp 6.400</Text>
                    </View>
                    <View style={styles.items}>
                        <Text style={styles.item}>2x Indomie</Text>
                        <Text style={styles.itemPrice}>Rp 7.000</Text>
                    </View>
                    <View style={styles.items}>
                        <Text style={styles.item}>5x Red Bull</Text>
                        <Text style={styles.itemPrice}>Rp 50.400</Text>
                    </View>

                    {/* Total */}
                    <View style={styles.total}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={styles.totalAmount}>Rp 63.800</Text>
                    </View>

                    {/* Profile */}
                    <View style={styles.profileContainer}>
                        <Image
                            source={require('@/assets/images/profil.jpeg')}  // Ganti path dengan gambar profil
                            style={styles.profileImage}
                        />
                        <View>
                            <Text style={styles.profileName}>Samantha</Text>
                            <Text style={styles.profilePhone}>0987 3422 8756</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>OKE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        alignItems: 'center',
        paddingVertical: 20,
    },
    successIconContainer: {
        backgroundColor: '#E9F8FF',
        borderRadius: 50,
        padding: 15,
        marginTop: 20,
    },
    successIcon: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4A4A4A',
        marginTop: 10,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        width: '90%',
        padding: 20,
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4A4A4A',
        marginBottom: 10,
    },
    cardContent: {
        marginTop: 10,
    },
    label: {
        fontSize: 12,
        color: '#9A9A9A',
        marginTop: 10,
    },
    value: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2C3A4B',
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    item: {
        fontSize: 14,
        color: '#4A4A4A',
    },
    itemPrice: {
        fontSize: 14,
        fontWeight: '600',
        color: '#4A4A4A',
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#EDEDED',
        paddingTop: 10,
    },
    totalLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4A4A4A',
    },
    totalAmount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4A90E2',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    profileName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#4A4A4A',
    },
    profilePhone: {
        fontSize: 12,
        color: '#9A9A9A',
    },
    button: {
        backgroundColor: '#32A7E2',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 140,
        marginTop: 7,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default PaymentSuccessScreen;