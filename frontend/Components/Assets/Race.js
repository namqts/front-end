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
import RaceList from "./RaceList";
import LinearGradient from "react-native-linear-gradient";
import { LinearTextGradient } from "react-native-text-gradient";

export default class Race extends Component {

    render() {
        return (
            <LinearGradient
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 0.0, y: 1.0 }}
                useAngle={true}
                angle={180}
                locations={[0.004, 0.01, 0.3559, 0.6927, 0.9615, 1.0]}
                angleCenter={{ x: 0.5, y: 0.5 }}
                colors={['#555555', '#969696', '#F1F1F1', '#504F4F', '#A7A7A7', '#D0D0D0']}
                style={styles.container}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0.0, y: 1.0 }}
                    useAngle={true}
                    angle={180}
                    locations={[0.0, 0.1615, 0.3385, 0.474, 0.9115, 1.0]}
                    angleCenter={{ x: 0.5, y: 0.5 }}
                    colors={['#F8F8F8', '#D0D0D0', '#F8F8F8', '#A4A4A4', '#5F5F5F', '#959595']}
                    style={styles.Viewcontainer}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 0.0, y: 1.0 }}
                        useAngle={true}
                        angle={180}
                        locations={[0.0, 1.0]}
                        angleCenter={{ x: 0.5, y: 0.5 }}
                        colors={['#262626', '#D0D0D0']}
                        style={styles.ViewcontainerRace}>
                        <View style={styles.rowContent}>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.0 }}
                                end={{ x: 0.0, y: 1.0 }}
                                useAngle={true}
                                angle={180}
                                locations={[0.06, 0.2723, 0.7548, 0.8197, 0.9632, 1.086]}
                                angleCenter={{ x: 0.5, y: 0.5 }}
                                colors={['#784F16', '#E7B94D', '#F3EDE8', '#432100', '#C49431', '#784F16']}
                                style={styles.raceList}>
                                <Text style={styles.Content}>
                                    RACE LIST
                                </Text>
                                <Image source={require('../Image/Start.png')}/>
                            </LinearGradient>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.0 }}
                                end={{ x: 0.0, y: 1.0 }}
                                useAngle={true}
                                angle={180}
                                locations={[0.02, 0.2615, 0.6426, 0.6927, 0.9615, 1.0]}
                                angleCenter={{ x: 0.5, y: 0.5 }}
                                colors={['#504F4F', '#B5B4B4', '#F1F1F1', '#504F4F', '#A7A7A7', '#D0D0D0']}
                                style={styles.Upcoming}>
                                <Text style={styles.txtCome}>
                                    Upcoming
                                </Text>
                                <Image source={require('../Image/Vector.png')} />
                            </LinearGradient>
                        </View>
                        <RaceList/>
                    </LinearGradient>
                </LinearGradient>
            </LinearGradient>
        );
    };
}

const styles = StyleSheet.create({
    containerRace: {
        margin: 8,
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
    rowContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    txtCome: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.02,
        color: '#383838'
    },
    Upcoming: {
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        width: 110,
        height: 34,
        marginLeft: 134,
        paddingTop: 8,
        paddingRight: 8,
        paddingBottom: 2,
        paddingLeft: 8,
        borderRadius: (0, 0, 4, 4),

    },
    raceList: {
        width: 120,
        height: 46,
        borderRadius: (0, 0, 4, 4),
        paddingLeft: 8,
        paddingBottom: 0,
        paddingRight: 8,
        paddingTop: 8,
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        left: 8
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
        width: 412,
        height: 1160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        shadowColor: 'rgba(255, 255, 255, 0.5)',
        shadowOpacity: 2,
        shadowOffset: { height: 0, width: 2 }
    },
    Viewcontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: 8,
        paddingRight: 8,
        width: 396,
        height: 1160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.5,
        elevation: 8,
        shadowOffset: { height: -2, width: 2 },
        borderLeftWidth: 0.1,
        borderRightWidth: 0.1,
        borderTopWidth: 0.1,
        borderBottomWidth: 0.1,
    },
    ViewcontainerRace: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 4,
        paddingRight: 4,
        width: 380,
        height: 1140,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 8,
    },
    Content: {
        display: 'flex',
        alignItems: 'center',
        width: 104,
        height: 20,
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: 24,
        color: '#3348D0'
    }
});
