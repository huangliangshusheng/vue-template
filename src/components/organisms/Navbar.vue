<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Home</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/about" class="nav-link">
                        About
                    </router-link>
                    <router-link to="/users" class="nav-link">
                        Users List
                    </router-link>
                    <a href="/api/users" class="nav-link"> User API </a>
                </div>
            </div>
        </div>
    </nav>
</template>
