import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Digi from '../../Digi';
import Icon from 'react-native-ionicons';

const KeyResoucesContainer = ({item, index}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={item.image} resizeMode="contain" />
        <View style={styles.resoucesContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Text style={styles.resoucesTitleText}>{item.name}</Text>
            <Icon name="md-checkmark-circle" size={22} color="#13B87E" />
          </View>
          <Text style={styles.resoucesDurationText}>{item.module}</Text>

          <View style={styles.viewContainer}>
            <Text style={styles.viewButtonText}>View</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default KeyResoucesContainer;

const styles = StyleSheet.create({
  mainContainer: {
    height: 135,
    width: '100%',
  },
  container: {
    padding: 16,
    marginHorizontal: 20,
    height: 125,

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
    // marginTop: 12,
    elevation: 10,
  },
  resoucesContainer: {
    marginLeft: 16,
    flex: 1,
  },
  resoucesTitleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#413D3D',
  },
  resoucesDurationText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8E8E8E',
  },
  viewContainer: {
    backgroundColor: '#0469DE',
    width: '30%',
    alignItems: 'center',
    padding: 6,
    borderRadius: 6,
    marginVertical: 12,
  },
  viewButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
