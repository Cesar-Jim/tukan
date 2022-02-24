export const retrieveChartData = async (
  dataSeries,
  userToken = process.env.NEXT_PUBLIC_BMX_TOKEN
) => {
  const url = `https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/${dataSeries}?token=${userToken}&mediaType=json`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: userToken,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return new Error('Could not retrieve data.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
