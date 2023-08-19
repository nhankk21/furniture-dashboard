import { useMutation } from 'react-query';
import { dispatch } from 'src/common/redux/store';
import { setAccessToken, setLogin, setRefreshToken } from '../auth.slice';
import { ILoginCallback } from '../interface';
import { getAuth } from '../service';
import { setRoleId } from '../login.slice';

export const useAuthlogin = ({ onError, onSuccess }: ILoginCallback) => {
  return {
    ...useMutation(getAuth, {
      onSuccess: (data) => {
        if (!data) return;
        dispatch(setAccessToken(data?.data?.jwt));
        dispatch(setRefreshToken(''));
        dispatch(setLogin(true));
        dispatch(setRoleId(data?.data?.roleId));
        onSuccess();
      },
      onError,
    }),
  };
};
