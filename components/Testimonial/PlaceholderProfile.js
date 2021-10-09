export default function PlaceHolderProfile({ children }) {
   return (
      <div className='placholder-profile-container'>
         <div className='placholder-profile-ball'>
            <div className='letter-container'>{children}</div>
         </div>
      </div>
   );
}
