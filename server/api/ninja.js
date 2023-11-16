export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = useQuery(event);

  // handle post data
  // const { age } = await useBody(event);

  // api call with private key
  const data = await $fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  return data;
});
