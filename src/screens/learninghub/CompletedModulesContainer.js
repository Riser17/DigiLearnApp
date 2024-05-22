import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

import Digi from '../../Digi';
import ProgressLine from '../../components/ProgressLine';
import Icon from 'react-native-ionicons';

const CompletedModulesContainer = ({item, index}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, {marginLeft: index === 0 ? 0 : 16}]}>
        <Image
          source={item.image}
          style={{width: 60, height: 60, resizeMode: 'stretch'}}
        />
        <View style={styles.pendingDetailsContainer}>
          <Text style={styles.moduleTitleText}>{item.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              marginTop: 4,
              gap: 5,
            }}>
            <Text style={styles.moduleDurationText}>{item.duration}</Text>
            <Icon name="md-checkmark-circle" size={15} color="#13B87E" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 105,
    width: Digi.constant.screenWidth / 1.5,
  },
  container: {
    height: 90,
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
    backgroundColor: '#F3F8F5',
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
    color: '#13B87E',
  },
  modulePercentageText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E1E2D',
  },
});
export default CompletedModulesContainer;
