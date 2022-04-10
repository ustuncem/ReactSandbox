import React from 'react';
import star from '../assets/star.svg';

export default function Card(props) {
  const { course } = props;

  let badgeText;

  if (course.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (course.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <article className="w-44 flex flex-col flex-0 mb-8">
      <div className="relative mb-3">
        {badgeText && (
          <p className="absolute py-1 px-2 top-2 left-2 rounded-md bg-white text-xs text-neutral-850">
            {badgeText}
          </p>
        )}
        <img
          src={`/${course.coverImg}`}
          alt="Test"
          className="rounded-2xl w-full"
        />
      </div>
      <p className="flex items-center font-light mb-1">
        <img src={star} alt="Test" className="rounded-2xl mr-1" />
        {course.stats.rating}
        <span className="text-gray-150 ml-1">
          ({course.stats.reviewCount}) &bull; {course.location}
        </span>
      </p>
      <h2 className="font-light mb-1">{course.title}</h2>
      <p className="font-light">
        <span className="font-semibold">From ${course.price}</span> / person
      </p>
    </article>
  );
}
