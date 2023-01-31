import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const Chart = () => {
  return (
    <View>
      {/* <Text>Bezier Line Chart</Text> */}
      <LineChart
        data={{
          //labels: ['34세', '35세', '36세', '37세', 'May', 'June'],
          labels: ['34세', '35세', '36세', '37세'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                // Math.random() * 100,
                // Math.random() * 100,
              ],
            },
          ],
        }}
        //width={Dimensions.get('window').width} // from react-native
        width={306}
        height={207}
        //yAxisLabel="$"
        //yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          //backgroundColor: '#e26a00',
          //backgroundGradientFrom: '#fb8c00',
          //backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          //color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          // decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          //labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            //stroke: '#ffa726',
            stroke: 'white',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 0,
        }}
      />
    </View>
  );
};

export default Chart;
