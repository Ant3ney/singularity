export default function BoldsBreaksAndSpans({ BBS }) {
   let BuildBBS = [];

   if (!BBS) {
      return <></>;
   }

   let newBBSComponent;
   BBS.forEach((BBSData, i) => {
      newBBSComponent = null;

      switch (BBSData.type) {
         case 'span':
            newBBSComponent = <span key={i}>{BBSData.text}</span>;
            break;
         case 'bold':
            newBBSComponent = <strong key={i}>{BBSData.text}</strong>;
            break;
         case 'break':
            newBBSComponent = <br key={i} />;
            break;
         default:
            break;
      }

      if (newBBSComponent) BuildBBS.push(newBBSComponent);
   });

   return BuildBBS;
}
