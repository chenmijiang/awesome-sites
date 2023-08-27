import React from 'react';

import { engines } from '@/constant';

interface SearchValueContext {
  currentEngineIndex: number;
}

interface SearchSetterContext {
  setCurrentEngineIndex: (index: number) => void;
}

export const SearchValueContext = React.createContext<SearchValueContext>({
  currentEngineIndex: 0,
});

export const SearchValueProvider = SearchValueContext.Provider;

export const SearchSetterContext = React.createContext<SearchSetterContext>({
  setCurrentEngineIndex: () => {},
});

export const SearchSetterProvider = SearchSetterContext.Provider;
