import { API_CONFIG } from "./config";
import {
  Coordinates,
  ForecastData,
  GeocodingResponse,
  WeatherData,
} from "@/types/types";

// Utility function to create the URL with query parameters
const createUrl = (
  endpoint: string,
  params: Record<string, string | number>
) => {
  const appid = API_CONFIG.API_KEY ?? "";
  const searchParams = new URLSearchParams({
    appid,
    ...params,
  });
  return `${endpoint}?${searchParams.toString}`;
};

// Generic function to fetch data and handle errors
const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Weather API Error: ${response.statusText}`);
  }

  return response.json();
};

// Fetch current weather data
export const getCurrentWeather = async ({
  lat,
  lon,
}: Coordinates): Promise<WeatherData> => {
  const url = createUrl(`${API_CONFIG.BASE_URL}/weather`, {
    lat: lat.toString(),
    lon: lon.toString(),
    units: "metric",
  });

  return fetchData<WeatherData>(url);
};

// Fetch weather forecast data
export const getForecast = async ({
  lat,
  lon,
}: Coordinates): Promise<ForecastData> => {
  const url = createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
    lat: lat.toString(),
    lon: lon.toString(),
  });

  return fetchData<ForecastData>(url);
};

// Reverse geocode coordinates to get location details
export const reverseGeoCode = async ({
  lat,
  lon,
}: Coordinates): Promise<GeocodingResponse[]> => {
  const url = createUrl(`${API_CONFIG.BASE_URL}/reverse`, {
    lat: lat.toString(),
    lon: lon.toString(),
    limit: "1",
  });

  return fetchData<GeocodingResponse[]>(url);
};

// Search locations by query
export const searchLocations = async (
  query: string
): Promise<GeocodingResponse[]> => {
  const url = createUrl(`${API_CONFIG.GEO}/direct`, {
    q: query,
    limit: "5",
  });

  return fetchData<GeocodingResponse[]>(url);
};
