const contactInfoData = [
    {
        id: 'contact-header',
        className: 'col-md-12',
        icon: 'bx bx-chat',
        title: 'contact.get-in-touch',
        text: 'contact.header-text',
        fontSize: '1rem'
    },
    {
        id: 'contact-social-profiles',
        className: 'col-md-4 mt-4',
        icon: 'bx bx-share-alt',
        title: 'contact.social-profiles',
    },
    {
        id: 'contact-email',
        className: 'col-md-4 mt-4',
        icon: 'bx bx-envelope',
        title: 'contact.email-me',
        text: ['gda','1998','.dev','@','gmail.com'].join(''),
        fontSize: '0.75rem'
    },
    {
        id: 'contact-phone',
        className: 'col-md-4 mt-4',
        icon: 'bx bx-phone-call',
        title: 'contact.call-me',
        text: ['+52 ','22 ','22 ','52 ','03 ','42'].join('')
    },
];

export default contactInfoData;