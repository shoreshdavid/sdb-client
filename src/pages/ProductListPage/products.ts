const relatedTeachingsDvd = require('../../assets/img/related-teachings-dvd.png');
const healingDvd = require('../../assets/img/healing-dvd.png');
const scripturesCd = require('../../assets/img/healing-scriptures-cd.png');

// tslint:disable:max-line-length

export const products = [
  {
    order: 1,
    name: 'Healing Teachings DVD',
    price: 19.95,
    featuredImage: healingDvd,
    storeLink:
      'https://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=823365852a594f9cb679a3f02e012baf',
  },
  {
    order: 2,
    name: 'God\'s Healing Scriptures CD',
    price: 19.95,
    featuredImage: scripturesCd,
    storeLink:
      'https://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=79cb5db62cd64ad196b1a9dac5506885',
    hasAudio: true,
  },
  {
    name: 'Get Healed Fast Related Teachings DVD',
    price: 19.95,
    featuredImage: relatedTeachingsDvd,
    storeLink:
      'https://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=9ee63af63bbc45dab3edba13935cf41f',
    order: 3,
  },
  {
    name: 'A Lawyers Case For The Resurrection',
    price: 12.95,
    featuredImage:
      'https://images-na.ssl-images-amazon.com/images/I/41MSMDmLMNL._SX330_BO1,204,203,200_.jpg',
    storeLink:
      'http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=3dde70fe16b64d80af2b5b9a775bc425',
    order: 4,
  },
  {
    name: 'I Have A Friend Who\'s Jewish, Do You?',
    price: 12.95,
    featuredImage:
      'https://images-na.ssl-images-amazon.com/images/I/512TXZQRKTL._SX303_BO1,204,203,200_.jpg',
    storeLink: '',
    order: 5,
    links: [{}],
  },
  {
    name: 'The Fig Tree Blossoms',
    price: 12.95,
    featuredImage:
      'https://images-na.ssl-images-amazon.com/images/I/51pLt9x50lL._SX315_BO1,204,203,200_.jpg',
    storeLink:
      'http://www.mcssl.com/SecureCart/SecureCart.aspx?mid=2C37E45F-149B-4853-9879-DC5AA7B39A34&pid=5b6afb34c66646d490a80ff97a157a14',
    order: 6,
  },
];
