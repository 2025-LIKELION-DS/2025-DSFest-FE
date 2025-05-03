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
  margin-bottom: 57px;

  width: max-content;
  cursor: pointer;
`;

export const LogoutText = styled.div`
  color: ${palette.system.alert};
`;

export const MenuTitle = styled.p`
  margin: 0;

  cursor: pointer;

  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-left: 1px solid rgba(78, 49, 165, 0.1);
  padding-left: 20px;
`;
