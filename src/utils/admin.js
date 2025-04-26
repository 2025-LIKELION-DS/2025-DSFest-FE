/**
 * 어드민 로그인 관련 유틸 함수입니다.
 * 어드민 로그인 상태는 localStorage의 'isAdmin' 키로 관리됩니다.
 * 각 함수는 로그인 상태 체크, 로그인 처리, 로그아웃 처리 기능을 제공합니다.
 * 
 * @function isAdminLoggedIn
 * @returns {boolean} 어드민 로그인 상태 여부 반환
 *
 * @function loginAdmin
 * @param {string} id - 입력한 아이디
 * @param {string} password - 입력한 비밀번호
 * @returns {boolean} 로그인 성공 여부 반환
 *
 * @function logoutAdmin
 * @description localStorage에서 어드민 로그인 정보를 삭제합니다.
 *
 * @author 목소연
**/

export const isAdminLoggedIn = () => {
  return localStorage.getItem('isAdmin') === 'true';
};

export const loginAdmin = (id, password) => {
  if (id === `${import.meta.env.VITE_ADMIN_ID}` && password === `${import.meta.env.VITE_ADMIN_PW}`) {
    localStorage.setItem('isAdmin', 'true');
    return true;
  }
  return false;
};

export const logoutAdmin = () => {
  localStorage.removeItem('isAdmin');
};
