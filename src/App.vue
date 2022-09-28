<script lang="ts" setup></script>

<template>
  <Transition>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </Transition>
</template>
