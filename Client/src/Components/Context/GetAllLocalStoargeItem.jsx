export function getData() {
    const storedIdsString = localStorage.getItem("favoriteTShirt");
    if (storedIdsString) {
      const storedIds = JSON.parse(storedIdsString);
      return storedIds;
    } else {
      return []; 
    }
  }
  