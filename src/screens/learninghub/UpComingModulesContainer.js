import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

import Digi from '../../Digi';
import ProgressLine from '../../components/ProgressLine';
import Icon from 'react-native-ionicons';

const UpComingModulesContainer = ({item, index, showPercentage}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, {opacity: index === 0 ? 1 : 0.6}]}>
        <Image source={item.image} style={styles.upComingImage} />
        <View style={styles.pendingDetailsContainer}>
          <Text style={styles.moduleTitleText}>{item.name}</Text>
          {index === 0 ? (
            <>
              <Text style={styles.moduleDurationText}>{item.duration}</Text>

              <ProgressLine percentage={item.percentage} />
            </>
          ) : (
            <View style={styles.lockedContainer}>
              <Icon size={12} color="#5B5757" name="md-lock" />
              <Text style={styles.lockedText}>Locked</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 120,
    width: '100%',
  },
  container: {
    padding: 16,
    marginHorizontal: 20,
    height: 110,

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

  upComingImage: {
    width: 70,
    height: 68,
  },
  lockedContainer: {
    backgroundColor: '#DADADA',
    width: '30%',
    alignItems: 'center',
    padding: 6,
    borderRadius: 6,
    flexDirection: 'row',
    gap: 6,
    marginVertical: 12,
  },
  lockedText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#5B5757',
  },
});
export default UpComingModulesContainer;
