// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

import { ObjectId } from "mongodb";
import { connectDatabase } from "../src/database";
import { Listing, ListingType, User } from "../src/lib/types";

const listings: Listing[] = [
  {
    _id: new ObjectId("5d378db94e84753160e08b30"),
    title: "In Heart of Istnabul",
    description:
      "2 bed, 2 bathroom cozy apartment in the heart of downtownand only 5 min away from the taksim place.",
    image:
      "https://pix10.agoda.net/hotelImages/4943007/-1/8ecce000cacc29ccf14edb5f895fc401.jpg?s=1024x768",
    host: "5d378db94e84753160e08b57",
    type: ListingType.Apartment,
    address: "istanbul",
    country: "turkey",
    admin: "istanbul",
    city: "istanbul",
    bookings: [],
    bookingsIndex: {},
    price: 12424,
    numOfGuests: 3
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b31"),
    title: "Cozy, clean, and affordable studio in midtown",
    description:
      "Cozy, clean, and affordable studio located around midtown. Perfect for a solo traveller on a budget.",
    image:
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/15/35/1535559_v5.jpeg",
    host: "5d378db94e84753160e08b55",
    type: ListingType.Apartment,
    address: "London",
    country: "UK",
    admin: "London",
    city: "London",
    bookings: [],
    bookingsIndex: {},
    price: 15806,
    numOfGuests: 3
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b32"),
    title: "Bright comfortable room within a 4 bedroom duplex",
    description:
      "Bright comfortable room within a 4 bedroom duplex. 10 min drive from local airport. Relax, re-charge your batteries",
    image:
      "https://s8318.pcdn.co/wp-content/uploads/2014/11/wes1105ex.66423_xx.jpg",
    host: "5d378db94e84753160e08b57",
    type: ListingType.House,
    address: "Berlin",
    country: "Germany",
    admin: "Berlin",
    city: "Berlin",
    bookings: [],
    bookingsIndex: {},
    price: 4055,
    numOfGuests: 2
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b33"),
    title: "Luxury condo suite located in the heart of Maldives",
    description:
      "Luxury condo suite located in the heart of the city with building pool/gym/sauna available 24/7. Buses, subway, and all other amenities are available close by. Booking comes with 1 available parking spot in building underground.",
    image:
      "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/04/best-luxury-hotels-resorts-Maldives.jpeg?fit=1920%2C1080&ssl=1",
    host: "5d378db94e84753160e08b59",
    type: ListingType.Apartment,
    address: "Maldives",
    country: "Maldives",
    admin: "Maldives",
    city: "Maldives",
    bookings: [],
    bookingsIndex: {},
    price: 21292,
    numOfGuests: 4
  },

];
const users: User[] = [
  {
    _id: "5d378db94e84753160e08b55",
    token: "token_************",
    name: "James J.",
    avatar:
      "https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560648533/mock/users/user-profile-1_mawp12.jpg",
    contact: "james@tinyhouse.com",
    walletId: "acct_************",
    income: 723796,
    bookings: [],
    listings: [
      new ObjectId("5d378db94e84753160e08b31"),
      new ObjectId("5d378db94e84753160e08b4b"),
      new ObjectId("5d378db94e84753160e08b4c")
    ]
  },
  {
    _id: "5d378db94e84753160e08b56",
    token: "token_************",
    name: "Elizabeth A.",
    avatar:
      "https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649052/mock/users/user-profile-2_arwtdy.jpg",
    contact: "elizabeth@tinyhouse.com",
    walletId: "acct_************",
    income: 256144,
    bookings: [],
    listings: [
      new ObjectId("5d378db94e84753160e08b37"),
      new ObjectId("5d378db94e84753160e08b38"),
      new ObjectId("5d378db94e84753160e08b3a"),
      new ObjectId("5d378db94e84753160e08b3b"),
      new ObjectId("5d378db94e84753160e08b3d"),
      new ObjectId("5d378db94e84753160e08b41"),
      new ObjectId("5d378db94e84753160e08b43"),
      new ObjectId("5d378db94e84753160e08b4a"),
      new ObjectId("5d378db94e84753160e08b50"),
      new ObjectId("5d378db94e84753160e08b51"),
      new ObjectId("5d378db94e84753160e08b53"),
      new ObjectId("5d378db94e84753160e08b54")
    ]
  },
  {
    _id: "5d378db94e84753160e08b57",
    token: "token_************",
    name: "Andrew D.",
    avatar:
      "https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649280/mock/users/user-profile-3_omxctk.jpg",
    contact: "andrew@tinyhouse.com",
    walletId: "acct_************",
    income: 272359,
    bookings: [],
    listings: [
      new ObjectId("5d378db94e84753160e08b30"),
      new ObjectId("5d378db94e84753160e08b32"),
      new ObjectId("5d378db94e84753160e08b34"),
      new ObjectId("5d378db94e84753160e08b35"),
      new ObjectId("5d378db94e84753160e08b36"),
      new ObjectId("5d378db94e84753160e08b3c"),
      new ObjectId("5d378db94e84753160e08b3e"),
      new ObjectId("5d378db94e84753160e08b47"),
      new ObjectId("5d378db94e84753160e08b48"),
      new ObjectId("5d378db94e84753160e08b4d")
    ]
  },
  {
    _id: "5d378db94e84753160e08b58",
    token: "token_************",
    name: "Danielle C.",
    avatar:
      "https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560650165/mock/users/user-profile-4_wxi6om.jpg",
    contact: "danielle@tinyhouse.com",
    walletId: "acct_************",
    income: 465043,
    bookings: [],
    listings: [
      new ObjectId("5d378db94e84753160e08b3f"),
      new ObjectId("5d378db94e84753160e08b40"),
      new ObjectId("5d378db94e84753160e08b44")
    ]
  },
  {
    _id: "5d378db94e84753160e08b59",
    token: "token_************",
    name: "Sarah K.",
    avatar:
      "https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560650436/mock/users/user-profile-5_tm8hhl.jpg",
    contact: "sarah@tinyhouse.com",
    walletId: "acct_************",
    income: 104347,
    bookings: [],
    listings: [
      new ObjectId("5d378db94e84753160e08b33"),
      new ObjectId("5d378db94e84753160e08b39"),
      new ObjectId("5d378db94e84753160e08b42"),
      new ObjectId("5d378db94e84753160e08b45"),
      new ObjectId("5d378db94e84753160e08b46"),
      new ObjectId("5d378db94e84753160e08b49"),
      new ObjectId("5d378db94e84753160e08b4e"),
      new ObjectId("5d378db94e84753160e08b4f"),
      new ObjectId("5d378db94e84753160e08b52")
    ]
  }
];

const seed = async () => {
  try {
    console.log("[seed] : running...");

    const db = await connectDatabase();

    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }

    for (const user of users) {
      await db.users.insertOne(user);
    }

    console.log("[seed] : success");
  } catch {
    throw new Error("failed to seed database");
  }
};

seed();
