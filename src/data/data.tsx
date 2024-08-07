import Delhi from "../../public/img/delhi.jpg";
import Dubai from "../../public/img/dubai.jpg";
import Berlin from "../../public/img/berlin.jpg";
import Paris from "../../public/img/paris.jpg";
import { FaLocationDot, FaSquareParking } from "react-icons/fa6";

export const popularCities = [
  {
    city: "Delhi",
    image: Delhi,
  },
  {
    city: "Dubai",
    image: Dubai,
  },
  {
    city: "Berlin",
    image: Berlin,
  },
  {
    city: "Paris",
    image: Paris,
  },
];

export const optionTypes = [
  { text: "Luxury", value: "luxury" },
  { text: "Budget", value: "budget" },
  { text: "3 Stars", value: "threeStars" },
  { text: "4 Stars", value: "fourStars" },
  { text: "5 Stars", value: "fiveStars" },
];

export const lokasiPenjemputan = [
  {
    label: "Yogyakarta",
    value: "yogyakarta",
  },
  {
    label: "Wonosobo",
    value: "wonosobo",
  },
  {
    label: "Magelang",
    value: "magelang",
  },
];


export const penginapan = [
  { nama: "Hotel Tirta Arum Price | Rp.300rb ", harga: 300000, value: "tirta", },
  {
    nama: "Sikembang Glamping Tenda Safari Double (Include Breakfast, Waterheater, Tea & Coffe) | Maks 2 Orang | Rp.350rb",
    value: "sikembang",
    harga: 35000,
  },
  {
    nama: "CRA Hotel | Deluxe Room | Rp.320rb ",
    value: "cra",
    harga: 320000,
  },
];

export const experience = [
  {
    label: "Pabrik Carica",
    value: "carica",
    description: `Mengunjungi dan melihat langsung pembuatan Carica di Pabrik Carica + membawa oleh" carica. (Price 100k/orang)`,
    harga: 100000,
  },
];
