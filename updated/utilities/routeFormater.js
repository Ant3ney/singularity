export function getFirstParam(route) {
   let routeArray = route.split('/');
   if (routeArray.length > 2) {
      return 'index';
   } else return routeArray[1];
}
