import ClassRoom from './0-classroom';

/**
 * Initializes an array of ClassRoom instances with predefined maxStudentsSize values.
 * @returns {ClassRoom[]} An array of initialized ClassRoom instances.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
