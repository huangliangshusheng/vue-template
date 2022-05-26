<template>
    <ul class="text-align">
        <li v-for="user in users" :key="user.id">
            <router-link :to="`/users/${user.id}`">
                {{ user.id }}:{{ user.name }}
            </router-link>
        </li>
    </ul>
</template>

<style>
ul {
    list-style: none;
    padding: 0;
}
</style>

<script setup lang="ts">
import { User } from "../../lib/users";

const { users } = defineProps<{
    users?: User[];
}>();
</script>
