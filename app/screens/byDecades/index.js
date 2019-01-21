import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {connect} from 'react-redux';
import globalStyles from '../../styles/styles';
import colors from '../../styles/colors';

class ByDecades extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedSlice: {
            label: '',
            value: 0
          },
          labelWidth: 0,
          colors: this.generateColors(Object.keys(this.filterByDecades()).length)
        }
      }

    static navigationOptions = {
        title: 'BY DECADES'
    }

    randomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    generateColors(count) {
        let colorsArr = [];

        for(let i=0; i <= count; i++) {
            colorsArr.push(this.randomColor());
        }

        return colorsArr;
    }

    filterByDecades() {
        let decades = {};
        this.props.favourites.favourites.forEach((film) => {
            const decade = Math.floor(film.year/10)*10;
            decades[decade] = [...(decades[decade] || []), film];
        });
        return decades;
    }

    render() {
        const { labelWidth, selectedSlice } = this.state;
        const { label, value } = selectedSlice;
        const decadesObj = this.filterByDecades();
        const keys = Object.keys(decadesObj);
        const data = keys.map((key, i) => ({
            key,
            value: decadesObj[key].length,
            svg: {fill: this.state.colors[i]},
            arc: { outerRadius: (70 + (decadesObj[key].length * 10)) + '%', padAngle: label === key ? 0.1 : 0 },
            onPress: () => this.setState({ selectedSlice: { label: key, value: decadesObj[key].length } })
        }));
        const deviceWidth = Dimensions.get('window').width;

        return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}>{"Films By Decades".toUpperCase()}</Text>
                <Text style={{textAlign: 'center'}}>Tap on sector to see details.</Text>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <PieChart
                        style={{ height: 500 }}
                        outerRadius={'80%'}
                        innerRadius={'40%'}
                        data={data}
                    />
                    <View
                        onLayout={({ nativeEvent: { layout: { width } } }) => {
                            this.setState({ labelWidth: width });
                        }}
                        style={{
                            position: 'absolute',
                            left: deviceWidth / 2 - labelWidth / 2 - 10,
                            textAlign: 'center'
                        }}>
                        {value > 0 ? <Text style={styles.decadeLabel}>{label}s</Text> : null}
                        {value > 0 ? <Text style={styles.decadeLabel}>{value} films</Text> : null}
                    </View>
                </View>
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    decadeLabel: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.black
    }
});

export default connect(state => ({favourites: state.favourites}))(ByDecades);