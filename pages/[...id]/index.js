/* Keep this code mininalistic for the page-builder should handle 
the heavylifting of creating a page */
import Dynamic from '../../page-builder';
import {
   getStaticPaths as redirectedGetStaticPaths,
   getStaticProps as redirectedGetStaticProps,
} from '../../page-builder';
export default Dynamic;

export let getStaticPaths = redirectedGetStaticPaths;

export let getStaticProps = redirectedGetStaticProps;
