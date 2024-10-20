interface RoomType {
  type: string;
  available: number;
  price: number;
}

interface Facility {
  name: string;
  description?: string;
}

interface AreaInfo {
  nearby: string[];
  restaurantsAndCafes: string[];
  naturalBeauty: string[];
  closestAirports: string[];
}

interface HouseRules {
  checkIn: string;
  checkOut: string;
  additionalRules?: string[];
}

export interface THotel {
  name: string;
  rooms: RoomType[];
  images: string[];
  facilities: Facility[];
  description: string;
  location: string;
  rating: number;
  areaInfo: AreaInfo;
  houseRules: HouseRules;
}
