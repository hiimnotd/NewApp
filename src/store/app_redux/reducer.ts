/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '@types';

export interface ProfileStateType {
  profile: User;
}

const initialProfileState: ProfileStateType = {
  profile: {
    avatar:
      'https://d3f5j9upkzs19s.cloudfront.net/wp-content/uploads/2021/08/Dogecoin-Foundation.jpg',
    email: 'myname@gmail.com',
    phone: '012345678',
    name: 'My Name',
    gender: 0,
  },
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

    onUpdateGender: (state, {payload}: PayloadAction<number>) => {
      state.profile.gender = payload;
    },
    onUpdateEmail: (state, {payload}: PayloadAction<string>) => {
      state.profile.email = payload;
    },
    onUpdatePhone: (state, {payload}: PayloadAction<string>) => {
      state.profile.phone = payload;
    },
    onUpdateDOB: (state, {payload}: PayloadAction<Date>) => {
      state.profile.dob = payload;
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
  onUpdateGender,
  onUpdateEmail,
  onUpdatePhone,
  onUpdateDOB,
} = appSlice.actions;
