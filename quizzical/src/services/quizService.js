async function getQuestion() {
  try {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=5&type=multiple',
    );
    const body = response.json();
    return body;
  } catch (error) {
    alert(
      'There was an error occured when we try to fetch the questions. Please try again later!',
    );
    return false;
  }
}

export default getQuestion;
