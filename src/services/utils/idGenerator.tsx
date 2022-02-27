const idGenerator = () => {
  const random = Math.random().toString(36).substring(5);
  const dateNow = Date.now().toString(36).substring(5);

  return random + dateNow;
};

export default idGenerator;
