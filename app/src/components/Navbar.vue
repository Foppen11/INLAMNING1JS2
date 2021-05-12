<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <!-- Container wrapper -->
        <div class="container-fluid">
            <!-- Navbar brand -->
            <router-link class="navbar-brand ml-5" to="/"><i class="fas fa-gamepad">GamersOnline</i></router-link>

            <!-- Toggle button -->
            <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>

            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- center links -->
                <ul class="navbar-nav mb-2 mb-lg-0">
                    
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/orders">Orders</router-link>
                    </li>                    
                </ul>
                <!-- center links -->
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item drop-down">
                        <a
                        class="nav-link dropdown"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <i class="fas fa-shopping-cart"></i>
                        <span v-show="cartItemQuantity" class="badge rounded-pill badge-notification bg-danger"> {{cartItemQuantity}} </span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
                            <ShoppingCart />
                        </ul>
                    </li>
                    <li class="nav-item drop-down">
                        <router-link
                        v-if="!loggedIn"
                        class="nav-link dropdown"
                        to="/login"
                        id="navbarDropdownMenuLink"
                        aria-expanded="false"
                        >
                        <i class="fas fa-user"></i>
                        </router-link>

                        <a
                        v-else
                        class="nav-link dropdown"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <i class="fas fa-user"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
                            <button class="btn btn-danger" @click="logout">Log out</button>
                        </ul>
                    </li>
                </ul>
            </div>
        
        </div>
    <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShoppingCart from './shoppingCart/ShoppingCart'
export default {
    name: 'navbar',
    components:{
        ShoppingCart
    },
    computed:{
        ...mapGetters(['cartItemQuantity', 'loggedIn'])
    },
    methods:{
        ...mapActions(['logout'])
    }
}
</script>

<style scoped>
    .ml-5{
        margin-left: 3rem;
    }
    .mr-5{
        margin-right: 3rem;
    }

</style>