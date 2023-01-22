const BREAKPOINTS = {
  mobileMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};
export const QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
  tablet: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptop: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
};
