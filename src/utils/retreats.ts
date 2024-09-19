import watersport4days1 from "./../assets/watersport/4-day-retreat/01.webp";
import watersport4days2 from "./../assets/watersport/4-day-retreat/02.webp";

import watersport4days3 from "./../assets/watersport/4-day-retreat/03.webp";

import watersport4days4 from "./../assets/watersport/4-day-retreat/04.webp";

import watersport4days5 from "./../assets/watersport/4-day-retreat/05.webp";
import watersport4days6 from "./../assets/watersport/4-day-retreat/06.webp";
import watersport4days7 from "./../assets/watersport/4-day-retreat/07.webp";

import watersport7day1 from "./../assets/watersport/7-day-retreat/1.webp";
import watersport7day2 from "./../assets/watersport/7-day-retreat/2.webp";
import watersport7day3 from "./../assets/watersport/7-day-retreat/3.webp";
import watersport7day4 from "./../assets/watersport/7-day-retreat/1.webp";
import watersport7day5 from "./../assets/watersport/7-day-retreat/5.webp";
import watersport7day6 from "./../assets/watersport/7-day-retreat/6.webp";
import watersport7day7 from "./../assets/watersport/7-day-retreat/7.webp";
import watersport7day8 from "./../assets/watersport/7-day-retreat/8.webp";
import watersport7day9 from "./../assets/watersport/7-day-retreat/9.webp";
import watersport7day10 from "./../assets/watersport/7-day-retreat/10.webp";
import watersport7day11 from "./../assets/watersport/7-day-retreat/11.webp";

import watersport4daypaddle1 from "./../assets/watersport/sup-private-retreat/01.webp";
import watersport4daypaddle2 from "./../assets/watersport/sup-private-retreat/02.webp";
import watersport4daypaddle3 from "./../assets/watersport/sup-private-retreat/03.webp";
//import watersport4daypaddle4 from "./../assets/watersport/sup-private-retreat/04.CR2";
import watersport4daypaddle5 from "./../assets/watersport/sup-private-retreat/05.webp";
import watersport4daypaddle6 from "./../assets/watersport/sup-private-retreat/06.webp";
import watersport4daypaddle7 from "./../assets/watersport/sup-private-retreat/07.webp";
import watersport4daypaddle8 from "./../assets/watersport/sup-private-retreat/08.webp";
import watersport4daypaddle10 from "./../assets/watersport/sup-private-retreat/10.webp";
import watersport4daypaddle11 from "./../assets/watersport/sup-private-retreat/11.webp";
import watersport4daypaddle12 from "./../assets/watersport/sup-private-retreat/12.webp";
import watersport4daypaddle13 from "./../assets/watersport/sup-private-retreat/13.webp";

import watersport21daysrenewal1 from "./../assets/watersport/21-renewals/1.webp";
import watersport21daysrenewal2 from "./../assets/watersport/21-renewals/2.webp";
import watersport21daysrenewal3 from "./../assets/watersport/21-renewals/3.webp";
import watersport21daysrenewal4 from "./../assets/watersport/21-renewals/4.webp";
import watersport21daysrenewal5 from "./../assets/watersport/21-renewals/5.webp";
import watersport21daysrenewal6 from "./../assets/watersport/21-renewals/6.webp";
import watersport21daysrenewal7 from "./../assets/watersport/21-renewals/7.webp";
import watersport21daysrenewal8 from "./../assets/watersport/21-renewals/8.webp";
import watersport21daysrenewal9 from "./../assets/watersport/21-renewals/9.webp";
import watersport21daysrenewal11 from "./../assets/watersport/21-renewals/11.webp";
import watersport21daysrenewal12 from "./../assets/watersport/21-renewals/12.webp";
import watersport21daysrenewal13 from "./../assets/watersport/21-renewals/13.webp";

import { includes } from "../components/molecules/RetreatsCard/RetreatsCard";

interface retreatsTypes {
  section: string;
  photos: string[];
  title: string;
  summary: string;
  includes: includes[];
  prices: { [key: string]: number | string }[];
  discounts?: string;
  headerImg: string;
}

export const waterSportRetreats: retreatsTypes[] = [
  {
    photos: [
      watersport4days1,
      watersport4days2,
      watersport4days3,
      watersport4days5,
      watersport4days6,
      watersport4days7,
    ],
    section: "4-day-watersport-retreat",
    title: "4 DAY WATERSPORT RETREAT",
    summary:
      "Top short wellness getaway in the heart of Bacalar, one of Mexico’s most enchanting Pueblos Mágicos with expert watersport guided designed to refresh your mind and body",
    includes: [
      {
        title: "WHAT IS INCLUDED",
        list: [
          "3 Nights of luxury accommodation",
          "Breakfast & Lunch mexican cuisine must try",
          "Daily yoga classes overlooking the lagoon",
          "1 exclusive snorkel excursion ",
          "1 stress relief sailing excursion discover hidden cenotes",
          "1 unique kayak excursion across the Pirate Channel ",
          "1 Aquatic guided meditation",
          "Pre- and post-retirement support from Outretret",
        ],
      },
    ],
    prices: [
      { title: "Private room for 1 person", price: 1200 },
      { title: "Deluxe room for 1 person", price: 1500 },
      { title: "Twins room for 2 people", price: 890 },
    ],
    discounts: "20% early bird discount",
    headerImg: watersport4days4,
  },
  {
    photos: [
      watersport7day1,
      watersport7day3,
      watersport7day4,
      watersport7day5,
      watersport7day6,
      watersport7day7,
      watersport7day8,
      watersport7day9,
      watersport7day10,
      watersport7day11,
    ],
    section: "7-day-watersport-retreat",
    title: "7 DAY WATERSPORT RETREAT ",
    summary:
      "Escape to Bacalar, one of the hidden gems of the Riviera Maya, embark for a 7-day wellness journey, healing with the water element.All levels are welcome!",
    includes: [
      {
        title: "WHAT YOU WILL EXPERIENCE",
        list: [
          "6 nights of luxury  accommodation in Bacalar , Rivera Maya",
          "Vegetarian or vegan breakfast & lunch",
          "Daily yoga classes with stunning lagoon views",
          "1 exclusive snorkeling excursion & best swimming spots",
          "1 Sunrise Stand-Up Paddleboarding (SUP) for an energizing start to your day",
          "1 Kayaking through the famous Pirate Channel",
          "1 Aquatic meditation for deep relaxation",
          "1 Holistic Janzu water therapy for healing experience",
          "1 Ice bath experience to boost recovery and revitalize your body",
          "1 Cultural immersion bicycle tour to discover the history and charm of Bacalar",
          "Outretrets pre- and post- retreat support from our team",
        ],
      },
    ],
    prices: [
      { title: "Private room for 1 person", price: 1800 },
      { title: "Deluxe room for 1 person", price: 2000 },
      { title: "Twins room for 2 people", price: 1600 },
    ],
    discounts: "10% early bird discount",
    headerImg: watersport7day2,
  },
  {
    photos: [
      watersport4daypaddle2,
      watersport4daypaddle3,
      //watersport4daypaddle4,
      watersport4daypaddle5,
      watersport4daypaddle6,
      watersport4daypaddle7,
      watersport4daypaddle8,
      watersport4daypaddle10,
      watersport4daypaddle11,
      watersport4daypaddle12,
      watersport4daypaddle13,
    ],
    section: "4-day-paddle-private-retreat",
    title: "4 DAY STAND UP PADDLE PRIVATE RETREAT",
    summary:
      "Paddle through the most beautiful lagoon in Mexico escape from the crowds to the best SUP spots in Bacalar",
    includes: [
      {
        title: " WHAT MAKES THIS RETREAT SPECIAL",
        list: [
          "3 Nights boutique hotel accommodation",
          "Healthy Breakfast & Lunch options",
          "Daily personalized yoga classes",
          "Customized private 1:1 or 1:2  retreat",
          "1 Guided snorkeling experience",
          "1 Sunrise Stand up paddle excursion",
          "1 Stand up paddle Cenotes excursión",
          "1 Training SUP race",
          "Pre and post retreat support from Outretrets",
          "Professional event photos",
        ],
      },
    ],
    prices: [
      { title: "Private room for 1 person", price: 990 },
      { title: "Deluxe room for 1 person", price: 1090 },
      { title: "Twins room for 2 people", price: 790 },
    ],
    discounts: "10% SALE",
    headerImg: watersport4daypaddle1,
  },
  {
    photos: [
      watersport21daysrenewal1,
      watersport21daysrenewal2,
      watersport21daysrenewal3,
      watersport21daysrenewal5,
      watersport21daysrenewal6,
      watersport21daysrenewal8,
      watersport21daysrenewal9,
      watersport21daysrenewal11,
      watersport21daysrenewal12,
      watersport21daysrenewal13,
    ],
    section: "21-day-mystic-water-renewal-retreat",
    title: "21 DAY MYSTIC WATER RENEWAL RETREAT",
    summary:
      "Personalized detox retreat , for those who want to reintegrate into everyday life in an adequate balance.Recover from technology addiction ,substance abuse, emotional, exhaustion, or simply need a deep reset.",
    includes: [
      {
        title: "Exclusive Wellness Sessionss",
        list: [
          "Yoga Classes (12 sessions)",
          "Guided Meditation (10 sessions)",
          "Ice Bath (4 sessions)",
          "Janzu Water Therapy (4 sessions)",
          "Conscious therapy (4 sessions)",
          "Premium detox nutritions",
          "Nature Hike (2 excursions)",
          "Hobie cat (2 excursions)",
          "Kayaking in the Lagoon (3 excursions)",
          "Paddle through the serene waters of the lagoon, enhancing physical fitness and mental relaxation (2 excursions)",
          "Immerse local culture with guided tours to nearby historical and cultural landmarks (1 excursions)",
        ],
      },
    ],
    prices: [{ title: "Private cabin for 1 person", price: 5200 }],
    discounts: "",
    headerImg: watersport21daysrenewal4,
  },
];

import mountain7days1 from "./../assets/mountain/7-day-peru/1.webp";
import mountain7days2 from "./../assets/mountain/7-day-peru/2.webp";
import mountain7days3 from "./../assets/mountain/7-day-peru/3.webp";
import mountain7days4 from "./../assets/mountain/7-day-peru/4.webp";
import mountain7days5 from "./../assets/mountain/7-day-peru/5.webp";
import mountain7days6 from "./../assets/mountain/7-day-peru/6.webp";
import mountain7days7 from "./../assets/mountain/7-day-peru/7.webp";
import mountain7days8 from "./../assets/mountain/7-day-peru/8.webp";

import mountain9dayspatagonia1 from "./../assets/mountain/7-day-patagonia/1.webp";
import mountain9dayspatagonia2 from "./../assets/mountain/7-day-patagonia/2.webp";
import mountain9dayspatagonia3 from "./../assets/mountain/7-day-patagonia/3.webp";
import mountain9dayspatagonia4 from "./../assets/mountain/7-day-patagonia/4.webp";
import mountain9dayspatagonia5 from "./../assets/mountain/7-day-patagonia/5.webp";
import mountain9dayspatagonia6 from "./../assets/mountain/7-day-patagonia/6.webp";
import mountain9dayspatagonia7 from "./../assets/mountain/7-day-patagonia/7.webp";
import mountain9dayspatagonia8 from "./../assets/mountain/7-day-patagonia/8.webp";
import mountain9dayspatagonia9 from "./../assets/mountain/7-day-patagonia/9.webp";
import mountain9dayspatagonia10 from "./../assets/mountain/7-day-patagonia/10.webp";
import mountain9dayspatagonia11 from "./../assets/mountain/7-day-patagonia/11.webp";

export const mountRetreats: retreatsTypes[] = [
  {
    photos: [
      mountain7days2,
      mountain7days3,
      mountain7days4,
      mountain7days5,
      mountain7days6,
      mountain7days8,
    ],
    section: "7-day-peru",
    title: "7 Day trekking Retreat in Peruvian Andes",
    summary:
      "Are you looking for clarity or inner peace? Join our guided trekking retreat in Huaraz, Peru, where the majestic Andes become an ancient vision quest ceremony",
    includes: [
      {
        title: "WHAT IS INCLUDED",
        list: [
          "6 Nights of accommodation",
          "Breakfast & Lunch",
          "Daily yoga classes",
          "Wilcacocha Lagon Trek / 4 hrs Moderate ~ Best view from Cordillera Blanca",
          "Paron Lagon Trek / 6 hrs Moderate ~ Best trail from Huaraz",
          "Hatun Machay Hiking / 3 hrs Easy ~  Stone Park",
          "Secret lagoon Trek / 4 hs Moderate",
          "1 Quechua Ritual",
          "1 ancient vision quest ceremony",
        ],
      },
    ],
    prices: [
      { title: "Private room (1 person)", price: 1700 },
      { title: "Twin shared room (2 people)", price: 1490 },
    ],
    headerImg: mountain7days1,
  },
  {
    photos: [
      mountain9dayspatagonia2,
      mountain9dayspatagonia3,
      mountain9dayspatagonia4,
      mountain9dayspatagonia5,
      mountain9dayspatagonia6,
      mountain9dayspatagonia7,
      mountain9dayspatagonia8,
      mountain9dayspatagonia9,
      mountain9dayspatagonia10,
      mountain9dayspatagonia11,
    ],
    section: "7-day-patagonia",
    title: "9 Day Patagonia Hiking Retreat ",
    summary:
      "An unforgettable high-end trip to a hiking paradise with restorative wellness activities, we take you on the best hikes at 4 differents areas of Patagonia",
    includes: [
      {
        title: "WHAT YOU WILL EXPERIENCE",

        list: [
          "8 Nights of private village accommodation ",
          "Healthy Breakfast & Lunch",
          "Daily yoga classes",
          "3 Guide Meditation",
          "Laguna Nimez Hiking / 3 hrs Easy ~ Best bird watching  from Calafate",
          "Chalten Hiking full day / 6 hrs Moderate ~ Capri Lagoon &  Condores view point",
          "1 Perito Moreno Glacier Hiking / 4 hrs Easy",
          "Rock paintings Hiking  / 4 hrs Easy ",
          "1 Cacao ceremony",
        ],
      },
    ],
    prices: [
      { title: "Private room (1 person)", price: 3500 },
      { title: "Twin shared room (2 people)", price: 2500 },
      { title: "Twin shared room (3 people)", price: 1800 },
    ],
    headerImg: mountain9dayspatagonia1,
  },
];
