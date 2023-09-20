const googleBooks = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response)
    throw new Error("Something Went Wrong");
  }
  const data = await response.json();
  return data.items;
};

export default googleBooks;
