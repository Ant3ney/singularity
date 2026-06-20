import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Singularity')
    .items([
      S.listItem().title('Pages').child(S.documentTypeList('page')),
      S.listItem().title('Products').child(S.documentTypeList('product')),
      S.listItem()
        .title('Waitlist Entries')
        .child(
          S.documentTypeList('waitlistEntry')
            .title('Waitlist Entries')
            .defaultOrdering([{field: 'submittedAt', direction: 'desc'}]),
        ),
      S.divider(),
      S.listItem()
        .id('contactUsEntries')
        .title('Contact Us Entries')
        .child(
          S.list()
            .id('contactUsEntriesList')
            .title('Contact Us Entries')
            .items([
              S.listItem()
                .id('contactUsUnread')
                .title('Unread')
                .child(
                  S.documentList()
                    .id('contactUsUnreadList')
                    .title('Unread Messages')
                    .schemaType('contactUsEntry')
                    .apiVersion('2024-06-01')
                    .filter('_type == "contactUsEntry" && read != true')
                    .defaultOrdering([{field: '_createdAt', direction: 'desc'}]),
                ),
              S.listItem()
                .id('contactUsRead')
                .title('Read')
                .child(
                  S.documentList()
                    .id('contactUsReadList')
                    .title('Read Messages')
                    .schemaType('contactUsEntry')
                    .apiVersion('2024-06-01')
                    .filter('_type == "contactUsEntry" && read == true')
                    .defaultOrdering([{field: '_createdAt', direction: 'desc'}]),
                ),
            ]),
        ),
    ])
