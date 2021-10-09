export default function warningErrorFilter() {
   const backup = console.warn;

   console.warn = function filterWarnings(msg) {
      console.log(msg);
      const supressedWarnings = ['componentWillReceiveProps has been renamed'];

      if (!supressedWarnings.some(entry => msg.includes(entry))) {
         backup.apply(console, arguments);
      }
   };

   const errorBackup = console.error;

   console.error = function filterErrors(msg) {
      const supressedErrors = [
         'Warning: Expected server HTML to contain a matching',
      ];

      if (!supressedErrors.some(entry => msg.includes(entry))) {
         errorBackup.apply(console, arguments);
      }
   };
}
