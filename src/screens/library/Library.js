import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import TopTabButton from '../../components/TopTabButton';
import SearchBarField from '../../components/SearchBarField';
import Digi from '../../Digi';
import KeyResoucesContainer from './KeyResoucesContainer';
import AllModulesListContainer from './AllModulesListContainer';
import TopicDetailsContainer from './TopicDetailsContainer';

const Library = () => {
  const [isKeyResources, setIsKeyResources] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const resoucesData = [
    {
      name: 'Additional Reading Material',
      module: 'Module 2 - Digital Shopper Journey',
      image: Digi.image.readingResources,
    },
    {
      name: 'Swiggy case study',
      module: 'Module 2 - Digital Shopper Journey',
      image: Digi.image.caseResources,
    },
    {
      name: 'Working file for selection simulation',
      module: 'Module 2 - Digital Shopper Journey',
      image: Digi.image.fileResources,
    },
    {
      name: 'Additional Reading Material',
      module: 'Module 2 - Digital Shopper Journey',
      image: Digi.image.readingResources,
    },
  ];
  const allModulesData = [
    'All Modules',
    'Module: 1',
    'Module: 2',
    'Module: 3',
    'Module: 4',
    'Module: 5',
    'Module: 6',
  ];

  const topicsData = [
    {
      image: Digi.image.readingResources,
      editImage: Digi.image.Pencil,
      name1: 'Shopping Missions',
      duration1: '01:30',
      description1:
        'In publishing and graphic digital, Lorem ipsum is a placeholder text commonly used to demonstrate the Lorem ipsum is a placeholder.',
      date1: '12 Sept,23',
      name2: 'Shopping Missions',
      duration2: '01:30',
      description2:
        'In publishing and graphic digital, Lorem ipsum is a placeholder text commonly used to demonstrate the Lorem ipsum is a placeholder.',
      date2: '12 Sept,23',
      name3: 'Shopping Missions',
      duration3: '01:30',
      description3:
        'In publishing and graphic digital, Lorem ipsum is a placeholder text commonly used to demonstrate the Lorem ipsum is a placeholder.',
      date3: '12 Sept,23',
    },
    {
      image: Digi.image.readingResources,
      editImage: Digi.image.Pencil,
      name1: 'Shopping Missions',
      duration1: '01:30',
      description1:
        'In publishing and graphic digital, Lorem ipsum is a placeholder text commonly used to demonstrate the Lorem ipsum is a placeholder.',
      date1: '12 Sept,23',
      name2: 'Shopping Missions',
      duration2: '01:30',
      description2:
        'In publishing and graphic digital, Lorem ipsum is a placeholder text commonly used to demonstrate the Lorem ipsum is a placeholder.',
      date2: '12 Sept,23',
      name3: 'Shopping Missions',
      duration3: '01:30',
      description3:
        'In publishing and graphic digital, Lorem ipsum is a placeholder text commonly used to demonstrate the Lorem ipsum is a placeholder.',
      date3: '12 Sept,23',
    },
  ];
  const onTabPressed = params => {
    setIsKeyResources(params === 1 ? true : false);
  };

  const keyResourcesItem = ({item, index}) => {
    return <KeyResoucesContainer item={item} index={index} />;
  };

  const topicDetailsItem = ({item, index}) => {
    return <TopicDetailsContainer item={item} index={index} />;
  };
  const allModulesListItem = ({item, index}) => {
    return (
      <AllModulesListContainer
        item={item}
        index={index}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
    );
  };
  return (
    <View style={styles.container}>
      <TopTabButton
        isKeyResources={isKeyResources}
        onTabPressed={onTabPressed}
      />

      <SearchBarField
        placeholdertext="Search"
        //onSearch={handleSearch}
      />
      {isKeyResources ? (
        <View style={{backgroundColor: '#F2F3F7', flexGrow: 1}}>
          <FlatList
            data={resoucesData}
            renderItem={keyResourcesItem}
            ListHeaderComponent={() => <View style={styles.blankSpace} />}
            ListFooterComponent={() => <View style={styles.blankSpace} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <>
          <View>
            <FlatList
              data={allModulesData}
              renderItem={allModulesListItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <Text style={styles.headingText}>
            Module 2 : Introduction to Digital Journeys
          </Text>

          <FlatList
            contentContainerStyle={{backgroundColor: '#F2F3F7'}}
            data={topicsData}
            renderItem={topicDetailsItem}
            ListHeaderComponent={() => <View style={styles.blankSpace} />}
            ListFooterComponent={() => <View style={styles.blankSpace} />}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Digi.colors.background,
  },
  blankSpace: {
    width: '100%',
    height: 20,
  },
  headingText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0469DE',
    marginLeft: 16,
    marginVertical: 20,
  },
});

export default Library;
