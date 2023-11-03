import React, { useContext, useState } from 'react';
import AsteroidContext from '../AsteroidContext';

export default function AsteroidInfo() {
  const { asteroidData } = useContext(AsteroidContext);

  return (
    <>
      <div>
        <fieldset>
          <legend>
            <strong>Asteroid Details</strong>
          </legend>
          <strong>Name :</strong> {asteroidData.name}
          <br />
          <br />
          <strong>Nasa-JPL-URL :</strong>{' '}
          <a href={asteroidData?.nasa_jpl_url}>Nasa-JPL url</a> <br />
          <br />
          <span
            style={{
              color: asteroidData?.is_potentially_hazardous_asteroid
                ? 'green'
                : 'red',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
            }}
          >
            {' '}
            Is Potentially Hazardous
          </span>{' '}
          {'  '}
          {asteroidData?.is_potentially_hazardous_asteroid ? 'true' : 'false'}
        </fieldset>
      </div>
    </>
  );
}
