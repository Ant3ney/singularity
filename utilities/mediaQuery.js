let querys = {
   getWidth: () => {
      let width = window.innerWidth;
      if (!width) {
         console.error(
            'Cannot check if is mobile because width could not be found'
         );
         return null;
      }
      return width;
   },
   isMobile: () => {
      let width = querys.getWidth();
      console.log('width', width);

      if (width && width <= 576) return true;
      else return false;
   },
   isMedium: () => {
      if (width && width <= 1199) return true;
      else return false;
   },
};
export default querys;
