import coreApi from "../CoreApi";

const getAllQuestion = async (category, amount) => {
  try {
    const response = await coreApi.get(
      `/api.php?amount=${amount}&category=${category}&type=multiple`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getAllQuestion };
