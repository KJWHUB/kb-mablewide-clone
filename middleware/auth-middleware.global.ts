// 로그인 필요 route
const authRequiredRoutes = ["/liked-stocks", "/my-assets", "/prime-club"];

const isAuthRequiredRoute = (path: string) => {
  return authRequiredRoutes.includes(path);
};

export default defineNuxtRouteMiddleware((to) => {
  const isAuth = false;
  if (isAuthRequiredRoute(to.path) && !isAuth) {
    const { openModal } = useModalStore();
    openModal(Modal.LOGIN);
    return abortNavigation();
  }
});
