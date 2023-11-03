import React, { useContext, useState } from 'react';
import AsteroidContext from '../AsteroidContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AsteroidForm() {
  const apiKey = '7UchYvfuyKe7VHUnVjP8660EvIj9xRiDOoGukq4a';

  const [asteroidId, setAsteroidId] = useState('');
  const navigate = useNavigate();

  const { setAsteroidData } = useContext(AsteroidContext);
  async function handleSubmit(e) {
    const url = `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY`;
    console.log(`Making API call to ${url}`);
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${apiKey}`
      );

      if (response.status === 200) {
        setAsteroidData(response.data);
        navigate('/info');
      } else {
        console.log(`There was an error in response ${response.status}`);
      }
    } catch (error) {
      console.error(`network response was not ok ${error.response?.status}`);
    }
  }

  return (
    <>
      <div>
        <fieldset>
          <legend>Asteroid Details</legend>

          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="asteroidID"></label>
            <input
              type="number"
              placeholder="Enter Asteroid ID"
              value={asteroidId}
              onChange={(e) => setAsteroidId(e.target.value)}
              id="asteroidID"
            />{' '}
            <br />
            <button disabled={!asteroidId}>Submit</button>
            <button>Random-ID</button>
          </form>
        </fieldset>
      </div>
    </>
  );
}
