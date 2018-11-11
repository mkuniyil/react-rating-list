/**
 * Method for sorting the list based on passed attribute
 *
 * @param {Object} list
 * @param {string} property
 */
export const getSortedList = (list, property) => {
  return (current, next) => {
    return list[next][property] - list[current][property];
  };
};
