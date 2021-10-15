import {RootState} from '@app/src/store/allReducer';
import isEqual from 'react-fast-compare';
import {useSelector as RXUseSelector} from 'react-redux';

export const useSelector = <T>(
  selector: (state: RootState) => T,
  equalityFn = isEqual,
) => RXUseSelector(selector, equalityFn);
