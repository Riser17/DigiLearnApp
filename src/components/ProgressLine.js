import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Line} from 'react-native-svg';

const ProgressLine = ({percentage}) => {
  // percentage is between 0 and 100
  const validPercentage = Math.min(Math.max(percentage, 0), 100);
  const lineWidth = 200; // Total width of the progress line
  const completedWidth = (validPercentage / 100) * lineWidth; // Width of the completed portion

  return (
    <View style={styles.container}>
      <Svg height="10" width={lineWidth}>
        {/* Background line */}
        <Line
          x1="0"
          y1="5"
          x2={lineWidth}
          y2="5"
          stroke="#DADADA"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Completed portion */}
        <Line
          x1="0"
          y1="5"
          x2={completedWidth}
          y2="5"
          stroke="#0469DE"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProgressLine;
