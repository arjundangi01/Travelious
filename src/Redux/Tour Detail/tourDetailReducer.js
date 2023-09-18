import { GET_SINGLE_TOUR_REQUEST } from "./action";

const initialState = {
  homePage: [
    {
      "id": 23,
      "Country": "USA",
      "name": "Kecamatan Ubud, USA",
      "url": "https://a0.muscache.com/im/pictures/4df1a75b-1529-4f49-abed-6b0e10c92467.jpg?im_w=720",
      "description": "This beautifully designed 1 bedroom villa offers a cosy indoor living space,swimming pool. ",
      "cost": "39201",
      "title": "Entire villa hosted by Alfred",
      "heading": "Luxe 1 BDR Romantic hideaway Private Villa Ubud",
      "urls": "https://a0.muscache.com/im/pictures/4a5c629b-9c92-450e-8d8f-995875798838.jpg?im_w=960",
      "url1": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/08ca9cc1-6c85-4663-9faa-114e1c00956e.jpeg?im_w=720",
      "url2": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/797d317f-a624-40eb-99de-2f3219176317.jpeg?im_w=720",
      "url3": "https://a0.muscache.com/im/pictures/31a82697-b77d-4e79-aa4f-cfdb65f967ec.jpg?im_w=720",
      "url4": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/762acbae-692b-4054-b49e-0970f83feda3.jpeg?im_w=720",
      "guestDetail": "4 guests2-bedrooms2-beds2-bathrooms",
      "description1": "Enjoy time with your loved one in this unique 1 bedroom villa, surrounded by lush greens and the sound of nature. Wake up, get out of bed and straight in the refreshing pool to start your day right! Enjoy a drink while stargazing by the pool on the comfy day bed or while having a dip in the pool.Sliding glass doors make it possible to fill all rooms with light and a glass ceiling in the bathroom brings natural light all day long. Surrounded by nature and jungle, your privacy is secured and you can fully enjoy this property.           The villa offers an en-suite bathroom, closed living room and fully equipped kitchen. Our trained staff will come daily for cleaning, gardening and pool maintenance. Please talk to the butler on site for time requests, in order to respect your privacy.You will find all amenities, linen and towels available during your stay.Enjoy this luxurious jungle paradise, a mix of bright and modern architecture with traditional balinese decoration and wooden details.The tranquillity and nature around the house ensures you a relaxed time, while you are just a short ride away from Ubud centre with many cafes, restaurants and shops.The perfect spot for your perfect holiday.Guest access"
    },
    {
      id: 11,
      Country: "Mauritius",
      name: "Tampaksiring, Mauritius",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-822384226588127884/original/f2138328-78ae-4596-bf2a-df999390fa57.jpeg?im_w=720",
      description:
        "Located just a 20-minute scooter ride from the vibrant centre of Ubud.",
      cost: "43201",
      title: "Entire cabin hosted by Eco Six Bali",
      heading: "Dome - Bamboo Villa in Eco Six Bali",
      urls: "https://a0.muscache.com/im/pictures/4a5c629b-9c92-450e-8d8f-995875798838.jpg?im_w=960",
      url1: "https://a0.muscache.com/im/pictures/08a9afde-e2f2-48aa-b8b0-a7e747318943.jpg?im_w=480",
      url2: "https://a0.muscache.com/im/pictures/b51f509a-9c94-4d1c-a31c-1a465e1670ac.jpg?im_w=480",
      url3: "https://a0.muscache.com/im/pictures/0295e1cd-09fe-448a-b837-7bf5ade3809c.jpg?im_w=480",
      url4: "https://a0.muscache.com/im/pictures/6d3f81b5-affa-4c13-8681-4081d2568be6.jpg?im_w=480",
      guestDetail: "4 guests2-bedrooms2-beds2-bathrooms",
      description1:
        "The Dome is a one bedroom bamboo villa built on two floors. Its ground floor houses an open air living room fitted with a dining area, a seating area and balinese style hammock.The living room has direct access to a spacious balinese style garden and the beautiful Santorini style infinity pool.Amenities in the living room include a projector with Netflix, Nespresso coffee machine and refrigerated minibar.The master bedroom on the upper floor is fitted with a king size bed, a walk-in wardrobe, air conditioning, an in-room bathtub from where our guests can enjoy the beautiful rice fields views and a balcony overlooking the famous volcano Mount Agung. The bedroom houses a modernly equipped bathroom.",
    },
    {
      id: 15,
      Country: "Thiland",
      name: "Abiansemal, Thiland",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-841871825869435855/original/cdc27dac-db12-42f3-849e-a5b66783c448.jpeg?im_w=720",
      description:
        "Aura House is perched on top of the Ayung river offering a beautiful view.",
      cost: "42201",
      title: "Entire villa hosted by Wayan",
      heading: "Aura House 2bds Eco Bamboo House, Pool, River View",
      urls: "https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=960",
      url1: "https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/f4f7b242-db33-46fc-9080-c3d6a6fd55ec.jpeg?im_w=720",
      url2: "https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/4756e699-f474-4ca7-8b77-06b12715a6cb.jpeg?im_w=720",
      url3: "https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/372e7d6f-7fb9-4668-92f0-25bb9a346814.jpeg?im_w=720",
      url4: "https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/fca892a4-3481-4ad1-9f92-404feaa42e9f.jpeg?im_w=720",
      guestDetail: "4 guests2-bedrooms2-beds2-bathrooms",
      description1:
        "Aura House is perched on top of the Ayung river offering a beautiful view. It features 2 very romantic en-suite bedrooms, a large living room fully furnished, a small kitchen, and a private swimming pool with view.It is the perfect gateway for adventurous couples and honeymoon.The whole house is private - it is just for you and your guests,We are very proud to have in Aura House one of the famous egg shaped door built by the designer company Ibuku. It is the entrance of the second bedroom.The atmosphere of Aura House is perfect for people looking to disconnect from their busy city life and/or nature enthusiasts. Be ready to be awaken by the sun peeking up into your room and the sounds of the river down below.",
    },
  ],
  tourObj: {},
};
const tourDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_TOUR_REQUEST:
      return { ...state, tourObj: payload };
    default:
      return state;
  }
};

export { tourDetailReducer };
