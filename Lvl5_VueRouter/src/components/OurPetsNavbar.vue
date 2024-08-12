<script></script>

<template>
    <header class="header container">
        <router-link to="/" class="header-logo">
            <h1 class="header-logo-title new">Cozy House</h1>
            <h2 class="header-logo-text new">Shelter for pets in Boston</h2>
        </router-link>
        <nav class="header-menu">
            <ul class="header-menu-list">
                <li class="header-menu-item">
                    <router-link to="/" class="header-menu-link new"
                        >About the shelter
                    </router-link>
                </li>
                <li class="header-menu-item">
                    <a href="#" class="header-menu-link is-current new"
                        >Our pets</a
                    >
                </li>
                <li class="header-menu-item">
                    <router-link
                        :to="{ path: '/', hash: '#help' }"
                        exact
                        class="header-menu-link new"
                        >Help the shelter</router-link
                    >
                </li>
                <li class="header-menu-item">
                    <a href="#contacts" class="header-menu-link new"
                        >Contacts</a
                    >
                </li>
            </ul>
            <div class="hamburger-menu hamburger-pets">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
</template>

<style></style>
