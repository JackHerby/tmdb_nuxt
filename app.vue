<script setup lang="ts">
const { data: hello } = await useFetch('/api/hello');

interface IHello {
  hello: string;
}

function isHello(hello: unknown): hello is IHello {
  return (hello as IHello).hello !== undefined;
}

if (isHello(hello.value)) {
  console.log(hello.value.hello);
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
