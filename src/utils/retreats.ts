import watersport4days1 from "./../assets/watersport/4-day-retreat/01.jpg";
import watersport4days2 from "./../assets/watersport/4-day-retreat/02.jpg";

import watersport4days3 from "./../assets/watersport/4-day-retreat/03.jpeg";

import watersport4days4 from "./../assets/watersport/4-day-retreat/04.jpeg";

import watersport4days5 from "./../assets/watersport/4-day-retreat/05.jpg";
import watersport4days6 from "./../assets/watersport/4-day-retreat/06.jpeg";
import watersport4days7 from "./../assets/watersport/4-day-retreat/07.jpeg";

import watersport7day1 from "./../assets/watersport/7-day-retreat/1.jpg";
import watersport7day2 from "./../assets/watersport/7-day-retreat/2.jpeg";
import watersport7day3 from "./../assets/watersport/7-day-retreat/3.jpeg";
import watersport7day4 from "./../assets/watersport/7-day-retreat/4.jpeg";
import watersport7day5 from "./../assets/watersport/7-day-retreat/5.jpeg";
import watersport7day6 from "./../assets/watersport/7-day-retreat/6.jpg";
import watersport7day7 from "./../assets/watersport/7-day-retreat/7.jpeg";
import watersport7day8 from "./../assets/watersport/7-day-retreat/8.jpg";
import watersport7day9 from "./../assets/watersport/7-day-retreat/9.jpg";
import watersport7day10 from "./../assets/watersport/7-day-retreat/10.jpeg";
import watersport7day11 from "./../assets/watersport/7-day-retreat/11.jpeg";

import watersport4daypaddle1 from "./../assets/watersport/sup-private-retreat/01.jpg";
import watersport4daypaddle2 from "./../assets/watersport/sup-private-retreat/02.jpg";
import watersport4daypaddle3 from "./../assets/watersport/sup-private-retreat/03.jpg";
//import watersport4daypaddle4 from "./../assets/watersport/sup-private-retreat/04.CR2";
import watersport4daypaddle5 from "./../assets/watersport/sup-private-retreat/05.jpg";
import watersport4daypaddle6 from "./../assets/watersport/sup-private-retreat/06.png";
import watersport4daypaddle7 from "./../assets/watersport/sup-private-retreat/07.png";
import watersport4daypaddle8 from "./../assets/watersport/sup-private-retreat/08.jpg";
import watersport4daypaddle10 from "./../assets/watersport/sup-private-retreat/10.jpeg";
import watersport4daypaddle11 from "./../assets/watersport/sup-private-retreat/11.jpg";
import watersport4daypaddle12 from "./../assets/watersport/sup-private-retreat/12.jpg";
import watersport4daypaddle13 from "./../assets/watersport/sup-private-retreat/13.jpeg";

import watersport21daysrenewal1 from "./../assets/watersport/21-renewals/1.png";
import watersport21daysrenewal2 from "./../assets/watersport/21-renewals/2.png";
import watersport21daysrenewal3 from "./../assets/watersport/21-renewals/3.png";
import watersport21daysrenewal4 from "./../assets/watersport/21-renewals/4.png";
import watersport21daysrenewal5 from "./../assets/watersport/21-renewals/5.png";
import watersport21daysrenewal6 from "./../assets/watersport/21-renewals/6.jpg";
import watersport21daysrenewal7 from "./../assets/watersport/21-renewals/7.jpeg";
import watersport21daysrenewal8 from "./../assets/watersport/21-renewals/8.jpg";
import watersport21daysrenewal9 from "./../assets/watersport/21-renewals/9.jpg";
import watersport21daysrenewal11 from "./../assets/watersport/21-renewals/11.jpeg";
import watersport21daysrenewal12 from "./../assets/watersport/21-renewals/12.jpeg";
import watersport21daysrenewal13 from "./../assets/watersport/21-renewals/13.jpeg";

import { includes } from "../components/molecules/RetreatsCard/RetreatsCard";

interface waterSportRetreatsTypes {
  photos: string[];
  title: string;
  summary: string;
  includes: includes[];
  prices: { [key: string]: number | string }[];
  headerImg: string;
}

export const waterSportRetreats: waterSportRetreatsTypes[] = [
  {
    photos: [
      watersport4days1,
      watersport4days2,
      watersport4days3,
      watersport4days4,
      watersport4days5,
      watersport4days5,
      watersport4days6,
      watersport4days7,
    ],
    title: "4 DAY WATERSPORT RETREAT IMAGEN",
    summary:
      "Do you remember the feeling of calm when are you near water? We invite to an short serene exploring the 7-color lagoon outdoor & yoga practices",
    includes: [
      {
        title: "WHAT IS INCLUDED",
        list: [
          "3 Nights of accommodation",
          "Breakfast & Lunch",
          "Daily yoga classes",
          "1 Snorkeling experience",
          "1 Excursion by Sailing",
          "1 Excursion by  Kayak",
          "1 Aquatic meditation",
          "Pre and post retreat support from Outretrets",
          "Professional event photos",
        ],
      },
    ],
    prices: [{ title: "Private room", price: 1100 }],
    headerImg: watersport4days4,
  },
  {
    photos: [
      watersport7day1,
      watersport7day2,
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
    title: "7 DAY WATERSPORT RETREAT IMAGEN",
    summary:
      "Are you seeking to indulge in your favorite water sports amidst an authentic paradise?",
    includes: [
      {
        title: "WHAT YOU WILL EXPERIENCE",
        list: [
          "6 Nights of accommodation",
          "Breakfast & Lunch",
          "Daily yoga classes",
          "1 Snorkeling experience",
          "1 Excursion by Sailing",
          "1 Excursion by Kayak",
          "1 Stand up paddle board excurtion",
          "1 aquatic meditation",
          "1 Janzu water holistic experience",
          "1 Bicitour ",
          "Pre and post retreat support from Outretrets",
          "Professional event photos",
        ],
      },
    ],
    prices: [{ title: "Private room", price: 1700 }],
    headerImg: watersport7day2,
  },
  {
    photos: [
      watersport4daypaddle1,
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
    title: "4 DAY STAND UP PADDLE PRIVATE RETREAT",
    summary:
      "Would you like to explore dream places and have the entire landscape just for you",
    includes: [
      {
        title: " WHAT MAKES THIS RETREAT SPECIAL",
        list: [
          "3 Nights of accommodation",
          "Breakfast & Lunch",
          "Daily yoga classes",
          "Personalized 1:1 or 1:2 private retreat",
          "1 Snorkeling experience",
          "1 Sunrise Stand up paddle excursion",
          "1 Stand up paddle Cenotes excursión",
          "1 Training SUP race",
          "Pre and post retreat support from Outretrets",
          "Professional event photos",
        ],
      },
    ],
    prices: [{ title: "Private room", price: 930 }],
    headerImg: watersport4daypaddle1,
  },
  {
    photos: [
      watersport21daysrenewal1,
      watersport21daysrenewal2,
      watersport21daysrenewal3,
      watersport21daysrenewal4,
      watersport21daysrenewal5,
      watersport21daysrenewal6,
      watersport21daysrenewal7,
      watersport21daysrenewal8,
      watersport21daysrenewal9,
      watersport21daysrenewal11,
      watersport21daysrenewal12,
      watersport21daysrenewal13,
    ],
    title: "21 DAY MYSTIC WATER RENEWAL RETREAT",
    summary:
      "For those who want to reintegrate into everyday life in an adequate balance",
    includes: [
      {
        title: "Excursions",
        list: [
          "Nature Hike (2 excursions)",
          "Hobie cat (2 excursions)",
          "Kayaking in the Lagoon (3 excursions)",
          "Horse excursion (1 excursion)",
          "Paddle through the serene waters of the lagoon, enhancing physical fitness and mental relaxation (2 excursions)",
          "Immerse local culture with guided tours to nearby historical and cultural landmarks (1 excursions)",
          "Sunrise Meditation at Scenic Overlook (3 excursions)",
        ],
      },
      {
        title: "Holistic Sessions:",
        list: [
          "Yoga Classes (12 sessions)",
          "Guided Meditation (10 sessions)",
          "Ice Bath (4 sessions)",
          "Janzu Therapy (4 sessions)",
          "Conscious therapy (4 sessions) optional",
        ],
      },
    ],
    prices: [{ title: "Private cabin", price: 5200 }],
    headerImg: watersport21daysrenewal4,
  },
];

import mountain7days1 from "./../assets/mountain/7-day-peru/1.png";
import mountain7days2 from "./../assets/mountain/7-day-peru/2.png";
import mountain7days3 from "./../assets/mountain/7-day-peru/3.png";
import mountain7days4 from "./../assets/mountain/7-day-peru/4.png";
import mountain7days5 from "./../assets/mountain/7-day-peru/5.jpg";
import mountain7days6 from "./../assets/mountain/7-day-peru/6.jpg";
import mountain7days7 from "./../assets/mountain/7-day-peru/7.jpg";
import mountain7days8 from "./../assets/mountain/7-day-peru/8.jpg";

import mountain9dayspatagonia1 from "./../assets/mountain/7-day-patagonia/1.png";
import mountain9dayspatagonia2 from "./../assets/mountain/7-day-patagonia/2.png";
import mountain9dayspatagonia3 from "./../assets/mountain/7-day-patagonia/3.png";
import mountain9dayspatagonia4 from "./../assets/mountain/7-day-patagonia/4.png";
import mountain9dayspatagonia5 from "./../assets/mountain/7-day-patagonia/5.png";
import mountain9dayspatagonia6 from "./../assets/mountain/7-day-patagonia/6.jpg";
import mountain9dayspatagonia7 from "./../assets/mountain/7-day-patagonia/7.jpg";
import mountain9dayspatagonia8 from "./../assets/mountain/7-day-patagonia/8.jpg";
import mountain9dayspatagonia9 from "./../assets/mountain/7-day-patagonia/9.jpg";
import mountain9dayspatagonia10 from "./../assets/mountain/7-day-patagonia/10.jpg";
import mountain9dayspatagonia11 from "./../assets/mountain/7-day-patagonia/11.jpg";

export const mountRetreats = [
  {
    photos: [
      mountain7days1,
      mountain7days2,
      mountain7days3,
      mountain7days4,
      mountain7days5,
      mountain7days6,
      mountain7days7,
      mountain7days8,
    ],
    title: "7 Day Hiking Calm Retreat in Peruvian Andes",
    summary:
      "Join us for a transformative retreat where the beauty of the Andes becomes the canvas for your personal awakening.",
    includes: [
      {
        title: "",
        list: [
          "3 Nights of accommodation",
          "Breakfast & Lunch",
          "Daily yoga classes",
          "1 Meditation",
          "1 Lagoon Wilcacocha Excursion",
          "1 Laggon Paron Excursions",
          "1 Hatun Hiking Executions ",
          "1 Trekking to a secret lagoon",
          "1 Ritual Quechua",
        ],
      },
    ],
    prices: [{ title: "Private room", price: 5200 }],
    headerImg: mountain7days1,
  },
  {
    photos: [
      mountain9dayspatagonia1,
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
    title: "9 Day Patagonia Trekking Retreat",
    summary:
      "Would you like to explore stunning natural landscapes with majestic mountains, sparkling glaciers and vast lakes?",
    includes: [
      {
        title: "",
        list: [
          "3 Nights of accommodation",
          "Breakfast & Lunch",
          "Daily yoga classes",
          "1 Meditation",
          "1 hiking to Laguna Nimez",
          "1 Chaltén Hiking",
          "1 excursion to Perito Moreno Glacier",
          "Hiking excursion to see rock paintings",
          "1 cacao ceremony",
        ],
      },
    ],
    prices: [{ title: "Private room", price: 5200 }],
    headerImg: mountain9dayspatagonia1,
  },
];
