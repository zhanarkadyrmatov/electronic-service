"use client"
import React from 'react'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const YandexMap = () => {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
      };
    
      return (
        <YMaps>
          <Map 
           style={{ width:'100%', height:'340px' }}
           
          defaultState={defaultState}>
            <Placemark geometry={[55.684758, 37.738521]} />
          </Map>
        </YMaps>
      );
}

