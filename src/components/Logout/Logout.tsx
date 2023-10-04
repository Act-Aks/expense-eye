import { Image, TouchableOpacity } from 'react-native-ui-lib';

import useAuthenticationContext from '@contexts/auth/authContext';

import LogoutStyles from './Logout.style';

const Logout: React.FC = () => {
  const { onLogout } = useAuthenticationContext();

  return (
    <TouchableOpacity onPress={onLogout} style={LogoutStyles.container}>
      <Image
        source={require('@assets/log-out.png')}
        style={LogoutStyles.logoutIcon}
      />
    </TouchableOpacity>
  );
};

export default Logout;
