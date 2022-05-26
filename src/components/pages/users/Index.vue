<template>
    <AppTemplate>
        <h1>Users List</h1>
        <p>Example fetching data from server.</p>
        <p>You are currently on: /users</p>
        <UserList :users="users" />
        <p>
            <router-link to="/"> Go home </router-link>
        </p>
    </AppTemplate>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { get_users, User } from "../../../lib/users";
import UserList from "../../molecules/UserList.vue";
import AppTemplate from "../../templates/AppTemplate.vue";

const users = ref([] as User[]);

onMounted(async () => {
    users.value = await get_users();
});
</script>
