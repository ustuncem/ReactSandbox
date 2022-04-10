import React from 'react';
import marker from '../assets/map-marker.svg';

export default function Post(props) {
  const { data } = props;
  return (
    <>
      <article className="grid grid-cols-[1fr_2fr] place-items-center gap-x-5">
        <div
          className="bg-center bg-cover bg-no-repeat w-full h-52 rounded-xl"
          style={{
            backgroundImage: `url(${data.imageUrl})`,
          }}
        >
          &nbsp;
        </div>
        <div>
          <p className="flex items-center mb-1">
            <img src={marker} alt="Marker Icon" className="w-3 mr-2" />
            <span className="tracking-wider mr-4 text-sm">
              {data.location.toUpperCase()}
            </span>
            <a
              className="text-gray-350 underline text-sm"
              href={`${data.googleMapsUrl}`}
            >
              View on Google Maps
            </a>
          </p>
          <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
          <p className="font-bold text-xs mb-2">
            {data.startDate} - {data.endDate}
          </p>
          <p className="text-xs">{data.description}</p>
        </div>
      </article>
      <hr className="my-6 last:hidden" />
    </>
  );
}
