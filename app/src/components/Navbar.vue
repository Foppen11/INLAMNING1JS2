<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <!-- Container wrapper -->
        <div class="container-fluid">
            <!-- Navbar brand -->
            <router-link class="navbar-brand ml-5" to="/">Logo</router-link>

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
            <!-- Left links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/products">Products</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/orders">Orders</router-link>
                    </li>                    
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cart">
                            <span class="badge badge-pill bg-danger">1</span>
                            <span><i class="fas fa-shopping-cart"></i></span>
                        </router-link>
                    </li>
                    <li class="nav-item mr-5">
                        <router-link class="nav-link" aria-current="page" to="/account">My account</router-link>
                    </li>
                    
                    <!-- Navbar dropdown -->
        
                </ul>
            <!-- Left links -->
            </div>
        
        </div>
    <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
</template>

<script>
export default {

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