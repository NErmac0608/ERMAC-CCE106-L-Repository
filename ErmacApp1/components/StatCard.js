import { StyleSheet, Text, View} from 'react-native';

export default function StatCard(props) {
    return(
        <View style= {[styles.card, {backgroundColor: props.bgColor}]}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    card: {
        padding: 30,
        borderRadius: 30,
        marginVertical: 10,
        width: '100%',
        borderWidth: 5,
        borderColor: '#B28D5D',
    },

    title: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
    color: "#000000"
    },

    value: {
        fontSize: 28,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 5,
        color: "#000000"
    },
});