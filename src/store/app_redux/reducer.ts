/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '@types';

export interface ProfileStateType {
  profile: User;
}

const initialProfileState: ProfileStateType = {
  profile: {} as User,
};

const appSlice = createSlice({
  name: 'APP',
  initialState: initialProfileState,
  reducers: {
    onUpdateProfile: (state, {payload}: PayloadAction<User>) => {
      state.profile = payload;
    },
    onUpdateName: (state, {payload}: PayloadAction<string>) => {
      state.profile.name = payload;
    },
    onUpdateWeight: (state, {payload}: PayloadAction<number>) => {
      state.profile.weight = payload;
    },
    onUpdateAge: (state, {payload}: PayloadAction<number>) => {
      state.profile.age = payload;
    },
    onUpdateGender: (state, {payload}: PayloadAction<0 | 1>) => {
      state.profile.gender = payload;
    },
    onUpdateLanguage: (state, {payload}: PayloadAction<string>) => {
      state.profile.language = payload;
    },
    onUpdateRegion: (state, {payload}: PayloadAction<number>) => {
      state.profile.region = payload;
    },
    onUpdateSleepTime: (state, {payload}: PayloadAction<string>) => {
      state.profile.sleepTime = payload;
    },
    onUpdateWakeUpTime: (state, {payload}: PayloadAction<string>) => {
      state.profile.wakeUpTime = payload;
    },
    onRemoveProfile: state => {
      state.profile = initialProfileState.profile;
    },
  },
});

export const appReducer = appSlice.reducer;
export const {
  onUpdateProfile,
  onRemoveProfile,
  onUpdateName,
  onUpdateWeight,
  onUpdateGender,
  onUpdateLanguage,
  onUpdateRegion,
  onUpdateSleepTime,
  onUpdateWakeUpTime,
  onUpdateAge,
} = appSlice.actions;
