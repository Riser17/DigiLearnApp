import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Digi from '../../Digi';

const TopicDetailsContainer = ({item, index}) => {
  const InfoContainer = propsInfo => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Image source={propsInfo.image} resizeMode="contain" />
            <Text style={styles.topicTitleText}>
              {propsInfo.name} ({propsInfo.duration})
            </Text>
          </View>
          <Image source={propsInfo.editImage} resizeMode="contain" />
        </View>
        <Text style={styles.topicDescriptionText}>{propsInfo.description}</Text>
        <Text style={styles.topicDateText}>{propsInfo.date}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Topic Name</Text>
        <InfoContainer
          image={item.image}
          name={item.name1}
          duration={item.duration1}
          editImage={item.editImage}
          description={item.description1}
          date={item.date1}
        />
        <InfoContainer
          image={item.image}
          name={item.name2}
          duration={item.duration2}
          editImage={item.editImage}
          description={item.description2}
          date={item.date2}
        />
        <InfoContainer
          image={item.image}
          name={item.name3}
          duration={item.duration3}
          editImage={item.editImage}
          description={item.description3}
          date={item.date3}
        />
      </View>
    </View>
  );
};

export default TopicDetailsContainer;

const styles = StyleSheet.create({
  mainContainer: {
    height: 460,
    width: '100%',
  },
  container: {
    padding: 16,
    marginHorizontal: 20,
    height: 450,
    gap: 20,
    borderRadius: 8,
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
  headerText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#161616',
  },
  topicTitleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#161616',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  topicDescriptionText: {
    marginVertical: 4,
    fontSize: 12,
    fontWeight: '500',
    color: '#8E8E8E',
    lineHeight: 18,
  },
  topicDateText: {
    alignSelf: 'flex-end',
    fontSize: 12,
    fontWeight: '700',
    color: '#8E8E8E',
  },
});
