import styled from 'styled-components';
import palette from '@styles/theme';

import { Sidebar as SidebarOrigin } from '@components/Sidebar/SidebarStyle';

export const Sidebar = styled(SidebarOrigin)`
  background-image: none;
`;

export const Logout = styled.div`
  display: flex;
  gap: 3px;
  margin-left: 28px;
  margin-top: 90px;

  width: max-content;
  cursor: pointer;
`;

export const LogoutText = styled.div`
  color: ${palette.system.alert};
`;
