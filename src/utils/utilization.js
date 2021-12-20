export async function filterFetch(url, options) {
  try {
    return await fetch(url, options)
      .then(res => {
        if (res.status !== 401 && res.status !== 200 && res.status !== 404) {
          if (res.status == 503) {
            throw new Error(
              `${res.status}: Maaf, terdapat masalah pada jaringan Anda. Silahkan coba kembali.`,
            );
          } else {
            throw new Error(
              `${res.status}: Maaf, terjadi gangguan pada sistem kami. Silahkan coba beberapa saat lagi.`,
            );
          }
        } else {
          return res.json();
        }
      })
      .then(json => {
        return json.data;
      });
  } catch (error) {
    const errorMessage = error.message;
    if (errorMessage == 'Network request failed') {
      throw new Error(
        `Maaf, terdapat masalah pada jaringan Anda. Silahkan coba kembali.`,
      );
    } else {
      throw new Error(error.message);
    }
  }
}
