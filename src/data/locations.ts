export type LocationPin = { label: string; lat: number; lng: number };

export type Location = {
  city: string;
  slug: string;
  phone?: string;
  note?: string;
  state: string;
  center: [number, number];
  zoom: number;
  pins: LocationPin[];
};

export const locations: Location[] = [
  {
    city: "Dallas",
    slug: "dallas",
    phone: "(469) 436-5600",
    note: "Headquarters — 15150 Preston Road, STE 300",
    state: "Texas",
    center: [32.93, -96.8],
    zoom: 10,
    pins: [
      { label: "Preston Hollow", lat: 32.89, lng: -96.81 },
      { label: "Addison", lat: 32.96, lng: -96.83 },
      { label: "Las Colinas", lat: 32.88, lng: -96.96 },
      { label: "Lake Highlands", lat: 32.92, lng: -96.72 },
    ],
  },
  {
    city: "Houston",
    slug: "houston",
    phone: "(346) 998-4437",
    state: "Texas",
    center: [29.76, -95.37],
    zoom: 10,
    pins: [
      { label: "The Heights", lat: 29.8, lng: -95.4 },
      { label: "Westchase", lat: 29.74, lng: -95.58 },
      { label: "Sugar Land", lat: 29.62, lng: -95.63 },
      { label: "Kingwood", lat: 30.05, lng: -95.18 },
    ],
  },
  {
    city: "Austin",
    slug: "austin",
    phone: "(737) 377-2980",
    state: "Texas",
    center: [30.27, -97.74],
    zoom: 10,
    pins: [
      { label: "North Austin", lat: 30.39, lng: -97.72 },
      { label: "Westlake", lat: 30.30, lng: -97.80 },
      { label: "South Congress", lat: 30.24, lng: -97.75 },
      { label: "Round Rock", lat: 30.51, lng: -97.68 },
    ],
  },
  {
    city: "San Antonio",
    slug: "san-antonio",
    phone: "(737) 377-2980",
    state: "Texas",
    center: [29.42, -98.49],
    zoom: 10,
    pins: [
      { label: "Alamo Heights", lat: 29.49, lng: -98.46 },
      { label: "Stone Oak", lat: 29.65, lng: -98.49 },
      { label: "Southtown", lat: 29.41, lng: -98.49 },
      { label: "Leon Valley", lat: 29.50, lng: -98.61 },
    ],
  },
  {
    city: "Florida",
    slug: "florida",
    state: "Florida",
    center: [27.66, -81.52],
    zoom: 6,
    pins: [
      { label: "Orlando", lat: 28.54, lng: -81.38 },
      { label: "Tampa", lat: 27.95, lng: -82.46 },
      { label: "Jacksonville", lat: 30.33, lng: -81.66 },
      { label: "Miami", lat: 25.76, lng: -80.19 },
    ],
  },
  {
    city: "Atlanta",
    slug: "atlanta",
    state: "Georgia",
    center: [33.75, -84.39],
    zoom: 9,
    pins: [
      { label: "Midtown", lat: 33.78, lng: -84.39 },
      { label: "Buckhead", lat: 33.85, lng: -84.37 },
      { label: "Decatur", lat: 33.77, lng: -84.30 },
      { label: "Sandy Springs", lat: 33.93, lng: -84.38 },
    ],
  },
];

export const getLocationBySlug = (slug: string) => locations.find((location) => location.slug === slug);
