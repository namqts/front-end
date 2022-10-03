import { ListItem } from "@ui-kitten/components";
import { Size } from "@ui-kitten/components/devsupport";
import React, { Component, PureComponent, useState } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    StatusBar,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    ImageBackground
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LinearTextGradient } from "react-native-text-gradient";

const subjects = [
    { id: 1, image: '#CE9C2C' },
    { id: 2, image: '#E5B149' },
    { id: 3, image: '#D5A75A' },
    { id: 4, image: '#BF9C6B' },
    { id: 5, image: '#B09581' },
    { id: 6, image: '#9F8B93' },
    { id: 7, image: '#8B7F9D' },
    { id: 8, image: '#817CB7' },
    { id: 9, image: '#232120' },
    { id: 10, image: '#232120' },
    { id: 11, image: '#232120' },
    { id: 12, image: '#232120' },
];

const races = [
    {
        id: 1,
        location: [0.0, 1.0],
        color: ['#DCDCDC', '#A8A8A8'],
        colorRace: '#A8A8A8',
        imageG: require('../Image/g1.png'),
        yard: require('../Image/Yard.png')
    },
    {
        id: 2,
        location: [0.0, 1.0],
        color: ['#04C5AE', '#2185BD'],
        colorRace: '#2185BD',
        imageG: require('../Image/g2.png'),
        yard: require('../Image/Yard1.png')
    },
    {
        id: 3,
        location: [0.0, 1.0],
        color: ['#992DFF', '#631EAB'],
        colorRace: '#631EAB',
        imageG: require('../Image/g3.png'),
        yard: require('../Image/Yard1.png')
    },
    {
        id: 4,
        location: [0.0, 1.0],
        color: ['#92CAF9', '#6791B2'],
        colorRace: '#6791B2',
        imageG: require('../Image/g2.png'),
        yard: require('../Image/Yard1.png')
    },
    {
        id: 5,
        location: [0.0, 1.0],
        color: ['#DCDCDC', '#A8A8A8'],
        colorRace: '#A8A8A8',
        imageG: require('../Image/g1.png'),
        yard: require('../Image/Yard.png')
    },
    {
        id: 6,
        location: [0.0, 1.0],
        color: ['#FFE32D', '#AB941E'],
        colorRace: '#AB941E',
        imageG: require('../Image/g3.png'),
        yard: require('../Image/Yard.png')
    },
    {
        id: 7,
        location: [0.0, 1.0],
        color: ['#FF2D2D', '#AB1E1E'],
        colorRace: '#AB1E1E',
        imageG: require('../Image/g2.png'),
        yard: require('../Image/Yard.png')
    },
    {
        id: 8,
        location: [0.0, 1.0],
        color: ['#E27808', '#B15D04'],
        colorRace: '#B15D04',
        imageG: require('../Image/g2.png'),
        yard: require('../Image/Yard.png')
    },
    {
        id: 9,
        location: [0.0, 1.0],
        color: ['#E00283', '#A40060'],
        colorRace: '#A40060',
        imageG: require('../Image/g1.png'),
        yard: require('../Image/Yard.png')
    },
    {
        id: 10,
        location: [0.0, 1.0],
        color: ['#92CAF9', '#6791B2'],
        colorRace: '#6791B2',
        imageG: require('../Image/g3.png'),
        yard: require('../Image/Yard1.png')
    },
    {
        id: 11,
        location: [0.0, 1.0],
        color: ['#04C5AE', '#2185BD'],
        colorRace: '#2185BD',
        imageG: require('../Image/g3.png'),
        yard: require('../Image/Yard1.png')
    },
    {
        id: 12,
        location: [0.0, 1.0],
        color: ['#992DFF', '#631EAB'],
        colorRace: '#631EAB',
        imageG: require('../Image/g1.png'),
        yard: require('../Image/Yard1.png')
    },
];


export default class RaceList extends Component {

    render() {
        return (
            <View style={{marginTop: 6}}>
                {
                    races.map((race, i) => (
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 0.0, y: 1.0 }}
                            useAngle={true}
                            angle={180}
                            key={i}
                            locations={[0.0, 0.001, 0.4635, 0.5104, 1.0]}
                            colors={['rgba(88, 88, 88, 0.5)', 'rgba(88, 88, 88, 0.5)', 'rgba(88, 88, 88, 0.5)', 'rgba(56, 56, 56, 0.5)', 'rgba(88, 88, 88, 0.5)']}
                            style={styles.containerRace}>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.0 }}
                                end={{ x: 0.0, y: 1.0 }}
                                useAngle={true}
                                angle={90}
                                locations={race.location}
                                colors={race.color}
                                style={styles.numberRace}>
                                <Text style={styles.txtNumber}>
                                    {race.id} RACE
                                </Text>
                                <View style={{
                                    width: 0,
                                    height: 0,
                                    borderStyle: "solid",
                                    borderLeftWidth: 0,
                                    borderRightWidth: 20,
                                    borderBottomWidth: 26,
                                    borderLeftColor: "transparent",
                                    borderRightColor: "transparent",
                                    borderBottomColor: race.colorRace,
                                    display: 'flex',
                                    marginLeft: 12
                                }} />
                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    marginLeft: -10,
                                    display: 'flex',
                                    zIndex: -2,
                                    width: 100,
                                }}>
                                    {subjects.map((subject, i) => {
                                        return (
                                            <View
                                                key={subject.id}
                                                style={{
                                                    width: 6,
                                                    height: 16,
                                                    backgroundColor: subject.image,
                                                    borderRadius: 1,
                                                    marginTop: 6,
                                                    marginLeft: 2,
                                                }}
                                            >
                                            </View>
                                        );
                                    })}
                                </View>
                                <Text style={styles.text}>
                                    8
                                </Text>
                                <Image source={require('../Image/horse.png')} style={{
                                    marginTop: 6,
                                    marginLeft: 3,
                                    marginRight: 3
                                }} />
                                <ImageBackground source={race.yard} style={styles.yard} >
                                    <Text></Text>
                                </ImageBackground>
                                <View style={styles.time}>
                                    <ImageBackground source={require('../Image/time.png')} style={styles.time} >
                                        <Text></Text>
                                    </ImageBackground>
                                </View>

                            </LinearGradient>

                            <LinearGradient
                                start={{ x: 0.0, y: 0.0 }}
                                end={{ x: 0.0, y: 1.0 }}
                                useAngle={true}
                                angle={180}
                                locations={[0.0, 0.8787, 0.9054, 1.0]}
                                colors={['#353C3E', '#959796', '#13191D', '#555B61']}
                                style={styles.containerHorse}>
                                <Image source={race.imageG} style={styles.borderG} />
                                <Text style={styles.raceTxt}>
                                    Karitekisuto race
                                </Text>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.0 }}
                                    end={{ x: 0.0, y: 1.0 }}
                                    useAngle={true}
                                    angle={360}
                                    locations={[0.0, 0.4479, 0.4792, 1.0]}
                                    colors={['#EDC53A', '#B26F29', '#FFF873', '#DD9A09']}
                                    style={styles.betting}>
                                    <LinearTextGradient
                                        style={styles.txtBetting}
                                        locations={[-0.0937, 0.0259, 0.2196, 0.7323, 0.8576, 1]}
                                        colors={['#FFAE00', '#FED943', '#FFF39F', '#FFF39F', '#F5D23E', '#FFAE00']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0, y: 1 }}
                                    >
                                        <Text>
                                            Detail & betting
                                        </Text>
                                    </LinearTextGradient>
                                </LinearGradient>
                            </LinearGradient>
                        </LinearGradient>
                    ))
                }
            </View>

        );
    };
}

const styles = StyleSheet.create({
    txtBetting: {
        width: 60,
        height: 28,
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 14,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        elevation: 4,
        textAlign: "center"
    },
    betting: {
        alignItems: "center",
        padding: (4, 0),
        width: 82,
        height: 36,
        justifyContent: "center",
        flexDirection: "column",
        display: "flex",
        borderColor: '#825D24',
        borderWidth: 0.5,
        borderRadius: 7,
        marginLeft: 20,
        elevation: 4,
        shadowColor: 'rgba(0, 0, 0, 0.16)'
    },
    raceTxt: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 24,
        width: 178,
        height: 24,
        color: '#FFFFFF',
        alignItems: "center",
        textAlign: "center"
    },
    borderG: {
        marginLeft: 17,
        borderColor: '#FED943',
        borderWidth: 1
    },
    containerHorse: {
        width: 356,
        height: 59,
        display: "flex",
        marginTop: -1,
        flexDirection: "row",
        alignItems: "center",
        borderColor: 'rgba(19, 0, 0, 0.5)',
        borderWidth: 0.5,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        elevation: 8,
        borderColor: '#555B61',
        borderWidth: 1,
    },
    time: {
        width: 72,
        height: 23,
        padding: 0.2,
        backgroundColor: '#DCDCDC'
    },
    yard: {
        width: 62,
        height: 24,
        marginLeft: 13.5
    },
    text: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.02,
        color: '#FFFFFF',
        marginTop: 2
    },
    txtNumber: {
        fontStyle: "italic",
        fontSize: 16,
        lineHeight: 26,
        letterSpacing: -0.25,
        fontWeight: 'bold',
        marginLeft: 6,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { height: 1, width: 1 },
        textShadowRadius: 4
    },
    numberRace: {
        width: 72,
        height: 26,
        alignItems: 'flex-start',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flexDirection: 'row',
        display: 'flex',
    },
    containerRace: {
        marginTop: 2,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 2,
        width: 357,
        height: 86,
        flexDirection: 'column',
        display: 'flex',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderWidth: 0.5,
        borderColor: 'rgba(19, 0, 0, 0.25)'
    },
});
