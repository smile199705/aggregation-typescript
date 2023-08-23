/**
 * 按照初始化数据定义项目中的权限，统一管理
 * 参考文档 https://next.umijs.org/docs/max/access
 * @param initialState
 */
export default (initialState: InitialState) => {
  // console.log('11111111111')
  const { loginUser } = initialState
  const canUser = !!loginUser;
  const canAdmin =!!(
      loginUser && loginUser.userRole === 'admin');
  console.log('11111111111', canUser, canAdmin)
  return {
    canUser,
    canAdmin,
  };
};
