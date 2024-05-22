import React from 'react';
import {View, StyleSheet, Pressable, Text, Image} from 'react-native';

const TopTabButton = props => {
  const TabButton = propsTab => {
    return (
      <View style={styles.subTabContainer}>
        <Pressable
          style={styles.tabButton}
          onPress={() => props.onTabPressed(propsTab.tabIndex)}>
          <Text
            style={[
              styles.tabText,
              {color: propsTab.isSelected ? '#0469DE' : '#9C9898'},
            ]}>
            {propsTab.tabName}
          </Text>
        </Pressable>

        <View
          style={[
            styles.selectedTabGradientBottom,
            {backgroundColor: !propsTab.isSelected ? 'CCCCCC ' : '#0469DE'},
          ]}></View>
      </View>
    );
  };
  return (
    <View style={styles.tabContainer}>
      <TabButton
        tabName="Key Resources"
        isSelected={props.isKeyResources}
        tabIndex={1}
      />
      <TabButton
        tabName="Saved Notes"
        isSelected={!props.isKeyResources}
        tabIndex={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    marginVertical: 25,
  },
  subTabContainer: {
    width: '50%',
    height: '100%',
  },
  selectedTabGradientBottom: {
    width: '100%',
    height: 3,
  },
  tabButton: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TopTabButton;
