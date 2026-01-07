import S from '@sanity/desk-tool/structure-builder';

export default function CMSStructure() {
  return S.list()
    .title('Singularity')
    .items([
      // Pages
      S.listItem()
        .title('Pages')
        .child(S.documentTypeList('page')),

      // Products
      S.listItem()
        .title('Products')
        .child(S.documentTypeList('product')),

      S.divider(),

      // Contact Us Entries
      S.listItem()
        .id('contactUsEntries') // ✅ SAFE ID
        .title('Contact Us Entries')
        .child(
          S.list()
            .id('contactUsEntriesList') // ✅ SAFE ID
            .title('Contact Us Entries')
            .items([
              // Unread messages
              S.listItem()
                .id('contactUsUnread') // ✅ SAFE ID
                .title('🚨 Unread')
                .child(
                  S.documentList('contactUsEntry')
                    .id('contactUsUnreadList') // ✅ SAFE ID
                    .title('Unread Messages')
                    .filter('_type == "contactUsEntry" && read != true')
                    .defaultOrdering([
                      { field: '_createdAt', direction: 'desc' },
                    ])
                ),

              // Read messages
              S.listItem()
                .id('contactUsRead') // ✅ SAFE ID
                .title('✓ Read')
                .child(
                  S.documentList('contactUsEntry')
                    .id('contactUsReadList') // ✅ SAFE ID
                    .title('Read Messages')
                    .filter('_type == "contactUsEntry" && read == true')
                    .defaultOrdering([
                      { field: '_createdAt', direction: 'desc' },
                    ])
                ),
            ])
        ),
    ]);
}
