export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  console.log(config.public.tmdbBaseUrl, config.tmdbAccsessToken);

  try {
    const result = await $fetch('/authentication', {
      baseURL: config.public.tmdbBaseUrl,
      headers: {
        Authorization: `Bearer ${config.tmdbAccessToken}`,
      },
      method: 'GET',
    });
    return result;
  } catch (error) {
    console.log(error);
  }
});
