<script></script>

<template>
    <header class="header container">
        <a href="#" class="header-logo">
            <h1 class="header-logo-title">Cozy House</h1>
            <h2 class="header-logo-text">Shelter for pets in Boston</h2>
        </a>
        <nav class="header-menu">
            <ul class="header-menu-list">
                <li class="header-menu-item">
                    <a href="#" class="header-menu-link is-current">About the shelter</a>
                </li>
                <li class="header-menu-item">
                    <router-link to="/pets" class="header-menu-link">Our pets</router-link>
                </li>
                <li class="header-menu-item">
                    <a href="#help" class="header-menu-link">Help the shelter</a>
                </li>
                <li class="header-menu-item">
                    <a href="#contacts" class="header-menu-link">Contacts</a>
                </li>
            </ul>
            <div class="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>

</template>

<style></style>