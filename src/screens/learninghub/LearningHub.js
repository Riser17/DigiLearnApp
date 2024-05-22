import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import BackButton from '../../components/BackButton';
import Digi from '../../Digi';
import {FlatList} from 'react-native-gesture-handler';
import PendingModulesContainer from './PendingModulesContainer';
import CompletedModulesContainer from './CompletedModulesContainer';
import UpComingModulesContainer from './UpComingModulesContainer';

const LearningHub = props => {
  const moduleData = [
    {
      name: 'Digital Shopper Journey',
      duration: '4 Learning hours left',
      image: Digi.image.moduleImage,
      percentage: 90,
    },
    {
      name: 'Digital Shopper Journey',
      duration: '2 Learning hours left',
      image: Digi.image.moduleImage,
      percentage: 95,
    },
    {
      name: 'Digital Shopper Journey',
      duration: '6 Learning hours left',
      image: Digi.image.moduleImage,
      percentage: 50,
    },
    {
      name: 'Digital Shopper Journey',
      duration: '4.8 Learning hours left',
      image: Digi.image.moduleImage,
      percentage: 75,
    },
  ];
  const moduleCompletedData = [
    {
      name: 'Digital Shopper Journey',
      duration: '4 hours completed',
      image: Digi.image.moduleImage,
    },
    {
      name: 'Digital Shopper Journey',
      duration: '2 hours completed',
      image: Digi.image.moduleImage,
    },
    {
      name: 'Digital Shopper Journey',
      duration: '6 hours completed',
      image: Digi.image.moduleImage,
    },
    {
      name: 'Digital Shopper Journey',
      duration: '4.8 hours completed',
      image: Digi.image.moduleImage,
    },
  ];
  const moduleUpComingData = [
    {
      name: 'Digital Shopper Journey',
      duration: '4 Learning hours left',
      image: Digi.image.moduleImage,
    },
    {
      name: 'Digital Shopper Journey',
      duration: '2 Learning hours left',
      image: Digi.image.moduleImage,
    },
    {
      name: 'Digital Shopper Journey',
      duration: '6 Learning hours left',
      image: Digi.image.moduleImage,
    },
    {
      name: 'Digital Shopper Journey',
      duration: '4.8 Learning hours left',
      image: Digi.image.moduleImage,
    },
  ];
  const backButtonPressed = () => {
    props.navigation.goBack();
  };

  const pendingModuleItems = ({item, index}) => {
    return <PendingModulesContainer item={item} index={index} />;
  };
  const completedModuleItems = ({item, index}) => {
    return <CompletedModulesContainer item={item} index={index} />;
  };
  const upcomingModuleItems = ({item, index}) => {
    return (
      <UpComingModulesContainer
        item={item}
        index={index}
        showPercentage={true}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#F2F3F7', paddingHorizontal: 20}}>
        <BackButton
          backButtonPressed={backButtonPressed}
          backText={'Back to Dashboard'}
        />
        <View style={styles.inProgressContainer}>
          <Text style={styles.inProgressText}>In Progress</Text>
        </View>
        <FlatList
          data={moduleData}
          renderItem={pendingModuleItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={{marginVertical: 20}}>
          <Text style={styles.titleText}>Recently Completed</Text>
          <FlatList
            data={moduleCompletedData}
            renderItem={completedModuleItems}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={{marginVertical: 20, paddingHorizontal: 20}}>
        <Text style={styles.titleText}>Upcoming Modules</Text>
      </View>
      <FlatList data={moduleData} renderItem={upcomingModuleItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Digi.colors.background,
  },
  inProgressContainer: {
    backgroundColor: '#D8EAFF',
    padding: 10,
    width: '25%',
    // marginLeft: 16,
    alignItems: 'center',
    borderRadius: 9,
  },
  inProgressText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0469DE',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#5B5757',
  },
});

export default LearningHub;
