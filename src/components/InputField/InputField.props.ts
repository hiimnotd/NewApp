import React from 'react';
import {ImageSourcePropType} from 'react-native';

export interface InputFieldProps {
  /**
   * Icon of box
   */
  icon?: ImageSourcePropType;

  /**
   * set on change text
   */
  setValue: React.Dispatch<React.SetStateAction<string>>;

  /**
   * check if input field is password
   */
  isPassword?: boolean;

  /**
   * placeholder
   */
  placeholder?: string;

  /**
   * label
   */
  label?: string;

  /**
   * on end editing
   */
  onEndEditing?: () => void;
}
