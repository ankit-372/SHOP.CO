export const getRandomProducts = (data, limit = 4) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
  };
  