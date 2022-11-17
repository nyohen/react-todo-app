// is helper function

// takes array and filter out empty values
export const getClasses = (classes) =>
  classes
    .filter((item) => item !== '') // filter out empty items
    .join(' ') // joins two items with space in betwene
    .trim(); // trims out space at the start and end
