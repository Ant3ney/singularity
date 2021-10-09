let landingPageData = [
   {
      name: 'NavOne',
      props: {
         current: 'home',
      },
   },
   {
      name: 'Banner',
      props: {},
   },
   {
      name: 'FeaturedApps',
      props: {
         title: '<span>Websites</span> <br /> built by us',
         featureds: [
            {
               img: '/assets/images/past-work/space-01.png',
               link: 'https://www.thebrugmethod.com',
               title: 'The Brug Method <br /> "Body. Resistance. Ultimate. Gains."',
               description: 'Workout Programs already made for you!',
            },
            {
               img: '/assets/images/past-work/space-02.png',
               link: 'https://247-sale.netlify.app',
               title: '24/7 Sales',
               description: 'Its always a steam sale here!',
            },
            {
               img: '/assets/images/past-work/space-03.png',
               link: 'https://www.hoodflixfilms.com',
               title: 'Hoodflix',
               description: 'Compelling films told from the heart',
            },
         ],
      },
   },
   { name: 'Testimonial' },
];

export default landingPageData;
