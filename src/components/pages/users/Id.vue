<template>
    <AppTemplate>
        <div v-if="user">
            <h1>Detail for {{ user.name }}</h1>
            <p>ID: {{ user.id }}</p>
        </div>
        <div v-else>404 - User not found</div>
    </AppTemplate>
</template>

<script setup lang="ts">
import AppTemplate from "../../templates/AppTemplate.vue";
import { ref, watchEffect } from "vue";
import { User, get_user } from "../../../lib/users";
import { useRoute } from "vue-router";

const user = ref({} as User | undefined);
const route = useRoute();

console.log(route.params.id);

watchEffect(async () => {
    const id = route.params.id as string;
    user.value = await get_user(id);
});
</script>
