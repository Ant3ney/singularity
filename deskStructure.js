import S from '@sanity/desk-tool/structure-builder';

export default function CMSStructure() {
   return S.list()
      .title('Singularity')
      .items([
         S.listItem().title('Pages').child(S.documentTypeList('page')),
         S.listItem().title('Products').child(S.documentTypeList('product')),
      ]);
}
