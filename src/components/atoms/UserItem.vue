<template>
    <p>{{ user.id }}:{{ user.name }}</p>
</template>

<script setup lang="ts">
import { User } from "../../lib/users";

const { user } = defineProps<{
    user: User;
}>();
</script>
