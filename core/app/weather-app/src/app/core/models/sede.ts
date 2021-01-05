export interface Sede {
  id: number;
  name: string;
  image: string;
  icon: string;
  temp: number;
  humidity: number;
  windSpeed: number;
}

export interface Main {
  temp: number;
  humidity: number;
}

export interface Sys {
  id: number;
  country: string;
}

export interface Weather {
  id: number;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}
