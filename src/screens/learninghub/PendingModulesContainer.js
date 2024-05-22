import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

import Digi from '../../Digi';
import ProgressLine from '../../components/ProgressLine';

const PendingModulesContainer = ({item, index}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, {marginLeft: index === 0 ? 0 : 16}]}>
        <Image source={item.image} />
        <View style={styles.pendingDetailsContainer}>
          <Text style={styles.moduleTitleText}>{item.name}</Text>
          <Text style={styles.moduleDurationText}>{item.duration}</Text>
          <View>
            <ProgressLine percentage={item.percentage} />
            <Text style={styles.modulePercentageText}>{item.percentage}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 170,
    width: Digi.constant.screenWidth - 60,
  },
  container: {
    height: 160,
    padding: 16,

    borderRadius: 8,
    flexDirection: 'row',
    shadowColor: '#5A5A5A',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    backgroundColor: Digi.colors.white,
    marginTop: 12,
    elevation: 10,
  },
  pendingDetailsContainer: {
    marginLeft: 16,
    flex: 1,
  },
  moduleTitleText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#5B5757',
  },
  moduleDurationText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0469DE',
    marginBottom: 20,
    marginTop: 8,
  },
  modulePercentageText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E1E2D',
  },
});
export default PendingModulesContainer;
