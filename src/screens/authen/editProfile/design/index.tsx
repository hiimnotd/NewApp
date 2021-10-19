import {useSelector} from '@app/src/common';
import {Background, HeaderTitle, Icon} from '@app/src/components';
import {APP_SCREEN, AuthorizeParamsList} from '@app/src/navigation/screenTypes';
import {onUpdateName} from '@app/src/store/app_redux/reducer';
import {ColorDefault} from '@app/src/themes/color';
import {fontSizeDefault} from '@app/src/themes/fontSize';
import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';
import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

const styles = StyleSheet.create({});

export type EditProfileProps = StackScreenProps<
  AuthorizeParamsList,
  APP_SCREEN.EDIT_PROFILE
>;

const EditProfileComponent = ({navigation}: EditProfileProps) => {
  const name = useSelector(x => x.app.profile.name);
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>(name ?? '');

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderHeaderTitle = useCallback(() => {
    return <HeaderTitle title={'My Profile'} />;
  }, []);

  const renderLeftButton = useCallback(() => {
    return (
      <TouchableOpacity style={{padding: 15}} onPress={onGoBack}>
        <Icon source={'leftArrow'} />
      </TouchableOpacity>
    );
  }, [onGoBack]);

  const onSave = useCallback(() => {
    onGoBack();
    dispatch(onUpdateName(input));
  }, [dispatch, input, onGoBack]);

  const renderRightButton = useCallback(() => {
    return (
      <TouchableOpacity style={{padding: 15}} onPress={onSave}>
        <Text
          style={{
            fontSize: fontSizeDefault.FONT_14,
            color: ColorDefault.primary,
          }}>
          Save
        </Text>
      </TouchableOpacity>
    );
  }, [onSave]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: renderHeaderTitle,
      headerLeft: renderLeftButton,
      headerRight: renderRightButton,
      headerStyle: {backgroundColor: ColorDefault.background},
    });
    return () => {};
  }, [navigation, renderHeaderTitle, renderLeftButton, renderRightButton]);

  const onChangeText = useCallback((text: string) => {
    setInput(text);
  }, []);

  return (
    <Background>
      <TextInput defaultValue={input} onChangeText={onChangeText} />
    </Background>
  );
};

export const EditProfile = memo(EditProfileComponent, isEqual);
